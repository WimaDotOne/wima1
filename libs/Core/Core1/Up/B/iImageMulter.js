import multer from "multer"
import { IsMimeTypeImage } from "./H/ImageProcess.js"
import { FILE_BYTE_MAX } from "../../../../../bConfig.js"

export async function iImageMulter(req, res, next) {
  try{
    const tempPath = req.tempPath

    if(!tempPath) {
      return res.json({ok:false, error: "Temp folder does not exist"})
    }

    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, tempPath)
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname)
      }
    })

    const mwMulter = multer({
      storage, fileFilter,
      limits: { fileSize: FILE_BYTE_MAX}
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

function fileFilter(req, file, cb) {
  if(IsMimeTypeImage(file.mimetype)) {
    cb(null, true)
    return
  }
  cb(new Error("Non-image file cannot be added."), false)
}