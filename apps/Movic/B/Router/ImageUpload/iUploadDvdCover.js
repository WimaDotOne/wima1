import { asyDeleteMany, asyRemoveTempFolder, asyShrinkImageFiles, asyUploadOnePlusSmallOne, User } from "../../../../../libs/Core/Core1/bCore1.js"
import Movic from "../../Model/Movic.js"
import MovicProject from "../../Model/MovicProject.js"

export async function iUploadDvdCover(req, res) {
  try{
    const tempFolderPath = req.tempFolderPath
    const userId = req.user._id

    const projectId = req.body.projectId

    if(!projectId) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find project"})
    }

    const user = await User.findById(userId)
    const project = await MovicProject.findById(projectId)

    if(!project || user.movicAccountId.toString() !== project.movicAccountId.toString()) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find matching project"})
    }

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find movic"})
    }

    const files = req.files

    if(!files || files.length < 1) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot detect uploaded image"})
    }

    // Shrink files
    const imageList = await asyShrinkImageFiles(files, tempFolderPath, 320, 280, 120, 105)

    //Upload files to Amazon
    const image = imageList[0]
  
    const file = {
      filePath: image.path,
      key: image.id,
      smallFilePath: image.smallPath,
      smallKey: image.smallId
    }

    const result = await asyUploadOnePlusSmallOne(process.env.AWS_MOVIC_BUCKET, file)
    
    //Save files info in database
    const img = result[0]
    const smImg = result[1]


    //Delete old image from Amazon S3 database
    if(movic.dvdCover) {
      const key1 = movic.dvdCover.s3Key
      const key2 = movic.dvdCover.s3KeySmall
      const keyArr = []
      if(key1) { keyArr.push(key1) } 
      if(key2) { keyArr.push(key2) }
      if(keyArr.length) {
        await asyDeleteMany(process.env.AWS_MOVIC_BUCKET, keyArr)
      }
    }

    movic.dvdCover = {
      s3Key: img.Key,
      s3KeySmall: smImg.Key,
      url: img.Location,
      urlSmall: smImg.Location
    }

    await movic.save()

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true, imageUrl: movic.dvdCover.urlSmall})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}