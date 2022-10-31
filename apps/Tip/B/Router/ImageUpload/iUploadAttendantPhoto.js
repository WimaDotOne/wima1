import { asyDeleteMany, asyRemoveTempFolder, asyShrinkImageFiles, asyUploadOnePlusSmallOne, User } from "../../../../../libs/Core/Core1/bCore1.js"
import TipJob from "../../Model/TipJob.js"

export async function iUploadAttendantPhoto(req, res) {
  try{
    const tempFolderPath = req.tempFolderPath
    const userId = req.user._id

    const jobId = (req.body.jobId || "").toString()

    if(!jobId) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find the job"})
    }

    //Don't use asyGetMyTipJob in order to handle error and remove temp folder
    const user = await User.findById(userId)
    const job = await TipJob.findById(jobId)

    if(!job || user.tipAccountId.toString() !== job.tipAccountId.toString()) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find matching job"})
    }

    const files = req.files

    if(!files || files.length < 1) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot detect uploaded image"})
    }

    // Shrink files
    const imageList = await asyShrinkImageFiles(files, tempFolderPath, 400, 600, 80, 120)

    //Upload files to Amazon
    const image = imageList[0]
  
    const file = {
      filePath: image.path,
      key: image.id,
      smallFilePath: image.smallPath,
      smallKey: image.smallId
    }

    const result = await asyUploadOnePlusSmallOne(process.env.AWS_TIP_BUCKET, file)
    
    //Save files info in database
    const img = result[0]
    const smImg = result[1]


    //Delete old image from Amazon S3 database
    if(job.selfPhoto) {
      const key1 = job.selfPhoto.s3Key
      const key2 = job.selfPhoto.s3KeySmall
      const keyArr = []
      if(key1) { keyArr.push(key1) } 
      if(key2) { keyArr.push(key2) }
      if(keyArr.length) {
        await asyDeleteMany(process.env.AWS_TIP_BUCKET, keyArr)
      }
    }

    job.selfPhoto = {
      s3Key: img.Key,
      s3KeySmall: smImg.Key,
      url: img.Location,
      urlSmall: smImg.Location
    }

    await job.save()

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true, imageUrl: job.selfPhoto.urlSmall})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}