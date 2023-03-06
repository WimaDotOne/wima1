import { asyDeleteMany, asyRemoveTempFolder, 
  asyShrinkImageFiles, asyUploadOnePlusSmallOne, S3Url,
  User } from "../../../../../../libs/Core/Core1/bCore1.js"
import ThankyJob from "../../Model/ThankyJob.js"
import ThankyAccount from "../../Model/ThankyAccount.js"

export async function iUploadAttendantPhoto(req, res) {
  try{
    const tempFolderPath = req.tempFolderPath
    const userId = req.user._id

    const jobNum = +(req.body.jobNum || 0)

    //Don't use helper function in order to handle error and remove temp folder
    const user = await User.findById(userId)

    if(!user || !user.thankyAccountId) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find login user or their thanky account"})
    }

    const thankyAccount = await ThankyAccount.findById(user.thankyAccountId)

    if(!thankyAccount || !thankyAccount.job1Id || !thankyAccount.job2Id) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find thanky account or its associated jobs."})
    }

    const jobId = jobNum === 2 ? thankyAccount.job2Id : thankyAccount.job1Id
    const job = await ThankyJob.findById(jobId)

    if(!job) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find your thanky account's job."})
    }

    const files = req.files

    if(!files || files.length < 1) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot detect uploaded image"})
    }

    // Shrink files
    const imageList = await asyShrinkImageFiles(files, tempFolderPath, 600, 600, 120, 120)

    //Upload files to Amazon
    const image = imageList[0]
  
    const file = {
      filePath: image.path,
      key: image.id,
      smallFilePath: image.smallPath,
      smallKey: image.smallId
    }

    const ThankyBucket = process.env.AWS_THANKY_BUCKET

    await asyUploadOnePlusSmallOne(ThankyBucket, file)


    //Delete old image from Amazon S3 database
    if(job.photo) {
      const key1 = job.photo.s3Key
      const key2 = job.photo.s3KeySmall
      const keyArr = []
      if(key1) { keyArr.push(key1) } 
      if(key2) { keyArr.push(key2) }
      if(keyArr.length) {
        await asyDeleteMany(ThankyBucket, keyArr)
      }
    }

    //Save files info in database

    job.photo = {
      s3Key: image.id,
      s3KeySmall: image.smallId,
      url: S3Url(ThankyBucket, image.id),
      urlSmall: S3Url(ThankyBucket, image.smallId)
    }

    await job.save()

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true, photoUrl: job.photo.urlSmall})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}