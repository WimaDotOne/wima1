import multer from "multer"
import { v4 as uuidv4 } from "uuid"
import pathHelper from "path"
const { RootPath, ExtractExtension, asyResizeImage, asyCompress, asyGetImageType } = require("./FileUtil")
const { Enum, Config } = require("../../../Package/Package")

//Wrapper of mwMulter
export async function iAddImages(req, res) {
  try {

    const folder = req.tempFolder
    if(!folder) {
      return res.json({ok:false, error: "Temp folder does not exist"})
    }

    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, `Temp/${folder}`)
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname)
      }
    })

    const mwMulter = multer({ 
      storage, fileFilter,
      limits: { fileSize: Config.MaxUploadImageSizeMb*1024*1024 }
    }).array("files")

    mwMulter(req, res, async (error)=>{
      try{
        if(error) {
          return res.json({ok:false, error: error.message})
        }
        //req.body.uploadType would be undefined if moved out of mwMulter, just like req.files 
        const uploadType = req.body.uploadType
        const [widthPx, heightPx, smallWidthPx, smallHeightPx] = GetWidthHeightPx(uploadType)
        const files = req.files
        const imageList = []
        const inputFilePaths = []

        for(const file of files) {

          let ext = await asyGetImageType(`${RootPath}/${file.path}`)
          if(ext !== "png") { ext = "jpg" } //image compress only png and jpg for now

          const uuid = uuidv4()
          const imageName = uuid+"."+ext
          const smallImageName = "sm-"+uuid+"."+ext
          const imagePath = `Temp/${folder}/${imageName}`
          const smallImagePath = `Temp/${folder}/${smallImageName}`
          const fullImagePath = pathHelper.normalize(`${RootPath}/${imagePath}`).split("\\").join("/")
          const fullSmallImagePath = pathHelper.normalize(`${RootPath}/${smallImagePath}`).split("\\").join("/")
          const fullFilePath = `${RootPath}/${file.path}`

          const image = {
            path: imagePath,
            imageName: imageName,
            originalname: file.originalname
          }
          inputFilePaths.push(fullImagePath) 
          imageList.push(image)


          await asyResizeImage(fullFilePath, fullImagePath ,widthPx,heightPx)

          if(smallWidthPx) {
            await asyResizeImage(fullFilePath, fullSmallImagePath ,smallWidthPx,smallHeightPx)
            image.smallPath = smallImagePath
            image.smallImageName = smallImageName
            inputFilePaths.push(fullSmallImagePath) 
          }
        }
        const outputFolderPath = pathHelper.normalize(`${RootPath}/Temp/${folder}`).split("\\").join("/")

        //output overwrite input files
        await asyCompress(inputFilePaths, outputFolderPath)

        return res.json({ok: true, imageList})
      } catch(err) {
        return res.json({ok:false, error: err.message})
      }
    })
    
  } catch(err) {
    return res.json({ok: false, error: err.message})
  }
}


function fileFilter(req, file, cb) {
  if(IsImage(file.mimetype)) {
    cb(null, true)
    return
  }
  cb(new Error("Non-image file cannot be added."), false)
}

function IsImage(mimeType) {
  const imageType = "image/"
  const len = imageType.length
  return mimeType.substring(0,len).toLowerCase()===imageType
}

function GetWidthHeightPx(uploadType) {
  let widthPx = 300
  let heightPx = 300
  let smallWidthPx = undefined
  let smallHeightPx = undefined

  if(uploadType === Enum.UploadType.BusinessImage1.value ||
    uploadType === Enum.UploadType.BusinessImage2.value) {
    widthPx = 1000
    heightPx = 500
  } else if(uploadType === Enum.UploadType.BusinessLogo.value) {
    widthPx = 200
    heightPx = 200
  } else if(uploadType === Enum.UploadType.Product.value) {
    smallWidthPx = 100
    smallHeightPx = 100
  }
  return [widthPx, heightPx, smallWidthPx, smallHeightPx]
}
