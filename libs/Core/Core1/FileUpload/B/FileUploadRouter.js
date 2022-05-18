import express from "express"
import { iNewTempFolder } from "./iNewTempFolder.js"
import { iRemoveTempFolder } from "./iRemoveTempFolder.js"
import { iAuthTemp } from "./iAuthTemp.js"

const FileUploadRouter = express.Router()

FileUploadRouter.post("/NewTempFolder", iNewTempFolder)
FileUploadRouter.post("/RemoveTempFolder", iAuthTemp, iRemoveTempFolder)

export {
  FileUploadRouter
}
