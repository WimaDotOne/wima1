import { asyRemoveTempFolder, asyShrinkImageFiles, asyUploadManyPlusSmall, S3Url, User } from "../../../../../libs/Core/Core1/bCore1.js"
import ImageFile from "../../../../../apps/Lingo/B/Model/LingoImageFile.js"
import LingoUnit from "../../../../../apps/Lingo/B/Model/LingoUnit.js"

export async function iUploadImages(req, res) {
  try{
    const tempFolderPath = req.tempFolderPath

    //just like req.files, req.body only becomes available after multer middleware has parsed the multi-part form data post
    const unitId = req.body.unitId

    if(!unitId) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find unit"})
    }

    const unit = await LingoUnit.findById(unitId)

    if(!unit) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find unit"})
    }

    const files = req.files

    // Shrink files
    const imageList = await asyShrinkImageFiles(files, tempFolderPath, 300, 300, 50, 50)

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

    const LingoAdminBucket = process.env.AWS_LINGO_ADMIN_BUCKET

    await asyUploadManyPlusSmall(LingoAdminBucket, fileArr)

    //Save files info in database

    const imageFiles = []
    for(const image of imageList) {
      if(!image) continue
      imageFiles.push({
        unitId: unit._id,
        name: image.name,
        s3Key: image.id,
        s3KeySmall: image.smallId,
        url: S3Url(LingoAdminBucket, image.id),
        urlSmall: S3Url(LingoAdminBucket, image.smallId)
      })
    }

    await ImageFile.insertMany(imageFiles)

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}