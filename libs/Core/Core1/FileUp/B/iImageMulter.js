import multer from "multer"
import { ImageUploadConfig } from "../../../../../bConfig.js"
import { asyRemoveTempFolder } from "../B/MakeTempFolder.js"

//Application code middleware (e.g. iNewTempFolder) will set tempFolderPath before calling iImageMulter
//iImageMulter store files in specified temp folder and set req.files
//iImageMulter parse multi-part non-file data into req.body
export async function iImageMulter(req, res, next) {
  try{
    const tempFolderPath = req.tempFolderPath

    if(!tempFolderPath) {
      return res.json({ok:false, error: "Temp folder does not exist"})
    }

    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, tempFolderPath)
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname)
      }
    })

    const mwMulter = multer({
      storage, fileFilter,
      limits: { fileSize: ImageUploadConfig.maxFileSize }  //every file need to be less than max to have an upload
    }).array("file")

    mwMulter(req, res, async (err)=>{
      if(err) {
        await asyRemoveTempFolder(tempFolderPath)
        if(err.code === "LIMIT_FILE_SIZE") {
          const maxFileSizeMb = Math.round(ImageUploadConfig.maxFileSize/(1000*1000))
          return res.json({ok:false, error: `Each file needs to be less than ${maxFileSizeMb} MB`})
        }
        return res.json({ok:false, error: err.message})
      }
      let totalSize = 0
      for(const file of req.files) {
        totalSize = totalSize + file.size
        if(totalSize > ImageUploadConfig.maxTotalFileSize) {
          await asyRemoveTempFolder(tempFolderPath)
          const maxTotalFileSizeMb = Math.round(ImageUploadConfig.maxTotalFileSize/(1000*1000))
          return res.json({ok: false, error: `Only ${maxTotalFileSizeMb} MB of files can be uploaded at a time.`})
        }
      }
      next()
    })

  } catch(err) {
    return res.json({ok: false, error: err.message})
  }
}

function IsMimeTypeImage(mimeType) {
  const imageType = "image/"
  const len = imageType.length
  return mimeType.substring(0,len).toLowerCase()===imageType
}

function fileFilter(req, file, cb) {
  if(IsMimeTypeImage(file.mimetype)) {
    cb(null, true)
    return
  }
  cb(null, false)
  //No need to provide error message, just silently filter out non-image file
  //cb(new Error("Non-image file cannot be added."), false)
}