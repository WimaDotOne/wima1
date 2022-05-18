import multer from "multer"
import { IsMimeTypeImage } from "./H/ImageProcess.js"
import { FILE_BYTE_MAX } from "../../../../../bConfig.js"


export function MakeMulter(appFolder) {

    let destination = "Temp"
    if(appFolder) {
      destination = destination + "/" + appFolder
    }

    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, destination)
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname)
      }
    })

    const mwMulter = multer({
      storage, fileFilter,
      limits: { fileSize: FILE_BYTE_MAX }
    }).array("file")

    return mwMulter
}

function fileFilter(req, file, cb) {
  if(IsMimeTypeImage(file.mimetype)) {
    cb(null, true)
    return
  }
  cb(new Error("Non-image file cannot be added."), false)
}