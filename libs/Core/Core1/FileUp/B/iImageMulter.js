import multer from "multer"
import { FILE_BYTE_MAX } from "../../../../../bConfig.js"

//Application code middleware will set tempFolderPath before calling iImageMulter
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
      limits: { fileSize: FILE_BYTE_MAX }
    }).array("file")

    mwMulter(req, res, async (err)=>{
      if(err) {
        return res.json({ok:false, error: err.message})
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