import { asyDeleteMany, 
  asyRemoveTempFolder, 
  asyShrinkImageFiles, 
  asyUploadOnePlusSmallOne, 
  S3Url, 
  User 
} from "../../../../../libs/Core/Core1/bCore1.js"
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

    const MovicBucket = process.env.AWS_MOVIC_BUCKET

    await asyUploadOnePlusSmallOne(MovicBucket, file)
    

    //Delete old image from Amazon S3 database
    if(movic.dvdCover) {
      const key1 = movic.dvdCover.s3Key
      const key2 = movic.dvdCover.s3KeySmall
      const keyArr = []
      if(key1) { keyArr.push(key1) } 
      if(key2) { keyArr.push(key2) }
      if(keyArr.length) {
        await asyDeleteMany(MovicBucket, keyArr)
      }
    }

    //Save files info in database

    movic.dvdCover = {
      s3Key: image.id,
      s3KeySmall: image.smallId,
      url: S3Url(MovicBucket, image.id),
      urlSmall: S3Url(MovicBucket, image.smallId)
    }

    await movic.save()

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true, imageUrl: movic.dvdCover.urlSmall})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}