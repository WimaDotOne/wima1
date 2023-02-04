import express from "express"
import { iImageMulter } from "../../../../../libs/Core/Core1/bCore1.js"
import { iAuth } from "../../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iLoadHome } from "./Dashboard/iLoadHome.js"
import { iSaveJob } from "./Dashboard/iSaveJob.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadAttendantPhoto } from "./ImageUpload/iUploadAttendantPhoto.js"
import { iGetOrCreateConnectedAccount } from "./Payout/iGetOrCreateConnectedAccount.js"
import { iLoadRecentPlaces } from "./Public/iLoadRecentPlaces.js"

const ThankyRouter = express.Router()

//Dashboard
ThankyRouter.get("/LoadHome", iAuth, iLoadHome)
ThankyRouter.post("/SaveJob", iAuth, iSaveJob)

//image upload
ThankyRouter.post("/UploadAttendantPhoto", iAuth, iNewTempFolder, iImageMulter, iUploadAttendantPhoto)

//Stripe
ThankyRouter.post("/GetOrCreateConnectedAccount", iAuth, iGetOrCreateConnectedAccount)

//Public
ThankyRouter.get("/LoadRecentPlaces", iLoadRecentPlaces)


export {
  ThankyRouter
}