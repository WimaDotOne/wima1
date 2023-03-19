import express from "express"
import { iImageMulter } from "../../../../libs/Core/Core1/bCore1.js"
import { iAdminAuth } from "../../../WimaAdmin/B/Router/iAdminAuth.js"
import { iChangeImageNames } from "./iChangeImageNames.js"
import { iCreateUnit } from "./iCreateUnit.js"
import { iDeleteUnitImages } from "./iDeleteUnitImages.js"
import { iLoadImageFolder } from "./iLoadImageFolder.js"
import { iLoadLanguageUnits } from "./iLoadLanguageUnits.js"
import { iLoadUnitScript } from "./iLoadUnitScript.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadImages } from "./ImageUpload/iUploadImages.js"
import { iSaveUnitScript } from "./iSaveUnitScript.js"

const LingoAdminRouter = express.Router() 

// image upload
LingoAdminRouter.post("/UploadImages", iAdminAuth, iNewTempFolder, iImageMulter, iUploadImages)


LingoAdminRouter.post('/CreateUnit', iAdminAuth, iCreateUnit)
LingoAdminRouter.get('/LoadLanguageUnits', iAdminAuth, iLoadLanguageUnits)

LingoAdminRouter.get('/LoadImageFolder', iAdminAuth, iLoadImageFolder)
LingoAdminRouter.post("/ChangeImageNames", iAdminAuth, iChangeImageNames)
LingoAdminRouter.post("/DeleteUnitImages", iAdminAuth, iDeleteUnitImages)
LingoAdminRouter.get('/LoadUnitScript', iAdminAuth, iLoadUnitScript)
LingoAdminRouter.post('/SaveUnitScript', iAdminAuth, iSaveUnitScript)



export {
  LingoAdminRouter
}