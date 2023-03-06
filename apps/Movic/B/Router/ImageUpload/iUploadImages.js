import { asyRemoveTempFolder, asyShrinkImageFiles, asyUploadManyPlusSmall, S3Url, User } from "../../../../../libs/Core/Core1/bCore1.js"
import ImageFile from "../../Model/MovicImageFile.js"
import MovicProject from "../../Model/MovicProject.js"

export async function iUploadImages(req, res) {
  try{
    const tempFolderPath = req.tempFolderPath
    const userId = req.user._id

    //just like req.files, req.body only becomes available after multer middleware has parsed the multi-part form data post
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

    const files = req.files

    // Shrink files
    const imageList = await asyShrinkImageFiles(files, tempFolderPath, 320, 180, 96, 54)

    //Upload files to Amazon
    const fileArr = []

    for(const image of imageList) {
      fileArr.push({
        filePath: image.path,
        key: image.id,
        smallFilePath: image.smallPath,
        smallKey: image.smallId
      })
    }

    const MovicBucket = process.env.AWS_MOVIC_BUCKET

    await asyUploadManyPlusSmall(MovicBucket, fileArr)

    //Save files info in database

    const imageFiles = []
    for(const image of imageList) {
      if(!image) continue
      imageFiles.push({
        movicId: project.movicId,
        name: image.name,
        s3Key: image.id,
        s3KeySmall: image.smallId,
        url: S3Url(MovicBucket, image.id),
        urlSmall: S3Url(MovicBucket, image.smallId)
      })
    }

    await ImageFile.insertMany(imageFiles)

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}