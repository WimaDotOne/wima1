import express from "express"
import { iImageMulter } from "../../../../libs/Core/Core1/bCore1.js"
import { iAdminAuth } from "../../../WimaAdmin/B/Router/iAdminAuth.js"
import { iCreateUnit } from "./iCreateUnit.js"
import { iLoadLanguageUnits } from "./iLoadLanguageUnits.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadImages } from "./ImageUpload/iUploadImages.js"

const LingoAdminRouter = express.Router() 

// image upload
LingoAdminRouter.post("/UploadImages", iAdminAuth, iNewTempFolder, iImageMulter, iUploadImages)


LingoAdminRouter.post('/CreateUnit', iAdminAuth, iCreateUnit)
LingoAdminRouter.get('/LoadLanguageUnits', iAdminAuth, iLoadLanguageUnits)

export {
  LingoAdminRouter
}