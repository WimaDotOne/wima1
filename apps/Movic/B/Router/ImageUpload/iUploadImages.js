import { asyRemoveTempFolder, asyShrinkImageFiles, asyUploadManyPlusSmall, User } from "../../../../../libs/Core/Core1/bCore1.js"
import ImageFile from "../../Model/ImageFile.js"
import MovicProject from "../../Model/MovicProject.js"

async function iUploadImages(req, res) {
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

    const resArr = await asyUploadManyPlusSmall("movic-dev", fileArr)

    //Save files info in database
    const imageDict = ImageDictionay(imageList)

    const imageFiles = []
    for(const res of resArr) {
      const img = res[0]
      const smImg = res[1]
      const image = imageDict[img.key]
      imageFiles.push({
        movicId: project.movicId,
        name: image.name,
        s3Key: img.Key,
        s3KeySmall: smImg.Key,
        url: img.Location,
        urlSmall: smImg.Location
      })
    }

    await ImageFile.insertMany(imageFiles)

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iUploadImages
}

function ImageDictionay(imageList) {
  const dict = {}
  for(const image of imageList) {
    dict[image.id] = image
  }
  return dict
}