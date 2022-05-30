import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateMovicProject } from "./My/iCreateMovicProject.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"
import { iLoadMyProject } from "./My/iLoadMyProject.js"
import { iSaveMovicScript } from "./My/iSaveMovicScript.js"
import { iLoadMovicScript } from "./My/iLoadMovicScript.js"
import { iUploadImages} from "./ImageUpload/iUploadImages.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iImageMulter } from "../../../../libs/Core/Core1/FileUp/B/iImageMulter.js"
import { iLoadImageFolder } from "./My/iLoadImageFolder.js"
import { iDeleteProjectImages } from "./My/iDeleteProjectImages.js"
import { iChangeImageNames } from "./My/iChangeImageNames.js"
import { iLoadScenes } from "./MovicPlayer/iLoadScenes.js"
import { iLoadSettingsIsMovicPublic } from "./My/Settings/iLoadSettingsIsMovicPublic.js"
import { iLoadSettingsMovicTitle } from "./My/Settings/iLoadSettingsMovicTitle.js"
import { iSaveSettingsIsMovicPublic } from "./My/Settings/iSaveSettingsIsMovicPublic.js"
import { iSaveSettingsMovicTitle } from "./My/Settings/iSaveSettingsMovicTitle.js"

const MovicRouter = express.Router()

//Image Upload
MovicRouter.post("/UploadImages", iAuth, iNewTempFolder, iImageMulter, iUploadImages)

//My
MovicRouter.post("/CreateMovicProject", iAuth, iCreateMovicProject)
MovicRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
MovicRouter.get("/LoadMyProject", iAuth, iLoadMyProject)
MovicRouter.get("/LoadMovicScript", iAuth, iLoadMovicScript)
MovicRouter.get("/LoadScenes", iAuth, iLoadScenes)
MovicRouter.get("/LoadImageFolder", iAuth, iLoadImageFolder)
MovicRouter.post("/SaveMovicScript", iAuth, iSaveMovicScript)
MovicRouter.post("/DeleteProjectImages", iAuth, iDeleteProjectImages)
MovicRouter.post("/ChangeImageNames", iAuth, iChangeImageNames)

//My Settings
MovicRouter.get("/LoadSettingsMovicTitle", iAuth, iLoadSettingsMovicTitle)
MovicRouter.get("/LoadSettingsIsMovicPublic", iAuth, iLoadSettingsIsMovicPublic)
MovicRouter.post("/SaveSettingsMovicTitle", iAuth, iSaveSettingsMovicTitle)
MovicRouter.post("/SaveSettingsIsMovicPublic", iAuth, iSaveSettingsIsMovicPublic)

export {
  MovicRouter
}