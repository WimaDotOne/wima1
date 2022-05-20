import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateMovicProject } from "./iCreateMovicProject.js"
import { iLoadMyProjects } from "./iLoadMyProjects.js"
import { iLoadMyProject } from "./iLoadMyProject.js"
import { iSaveMovicScript } from "./iSaveMovicScript.js"
import { iLoadMovicScript } from "./iLoadMovicScript.js"
import { iUploadImages} from "./ImageUpload/iUploadImages.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iImageMulter } from "../../../../libs/Core/Core1/Up/B/iImageMulter.js"

const MovicRouter = express.Router()


MovicRouter.post("/CreateMovicProject", iAuth, iCreateMovicProject)
MovicRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
MovicRouter.get("/LoadMyProject", iAuth, iLoadMyProject)
MovicRouter.get("/LoadMovicScript", iAuth, iLoadMovicScript)
MovicRouter.post("/SaveMovicScript", iAuth, iSaveMovicScript)
MovicRouter.post("/UploadImages", iAuth, iNewTempFolder, iImageMulter, iUploadImages)

export {
  MovicRouter
}