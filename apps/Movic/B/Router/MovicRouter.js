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

const MovicRouter = express.Router()

//Image Upload
MovicRouter.post("/UploadImages", iAuth, iNewTempFolder, iImageMulter, iUploadImages)

//My
MovicRouter.post("/CreateMovicProject", iAuth, iCreateMovicProject)
MovicRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
MovicRouter.get("/LoadMyProject", iAuth, iLoadMyProject)
MovicRouter.get("/LoadMovicScript", iAuth, iLoadMovicScript)
MovicRouter.get("/LoadImageFolder", iAuth, iLoadImageFolder)
MovicRouter.post("/SaveMovicScript", iAuth, iSaveMovicScript)
MovicRouter.post("/DeleteProjectImages", iAuth, iDeleteProjectImages)
MovicRouter.post("/ChangeImageNames", iAuth, iChangeImageNames)



export {
  MovicRouter
}