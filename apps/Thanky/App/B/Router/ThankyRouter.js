import express from "express"
import { iImageMulter } from "../../../../../libs/Core/Core1/bCore1.js"
import { iAuth } from "../../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iLoadHome } from "./Dashboard/iLoadHome.js"
import { iSaveJob } from "./Dashboard/iSaveJob.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadAttendantPhoto } from "./ImageUpload/iUploadAttendantPhoto.js"
import { iCreateCheckoutSession } from "./Payout/iCreateCheckoutSession.js"
import { iGetOrCreateConnectedAccount } from "./Payout/iGetOrCreateConnectedAccount.js"
import { iLoadJob } from "./Public/iLoadJob.js"
import { iLoadPlaceJobs } from "./Public/iLoadPlaceJobs.js"
import { iLoadRecentPlaces } from "./Public/iLoadRecentPlaces.js"

const ThankyRouter = express.Router()

//Dashboard
ThankyRouter.get("/LoadHome", iAuth, iLoadHome)
ThankyRouter.post("/SaveJob", iAuth, iSaveJob)

//image upload
ThankyRouter.post("/UploadAttendantPhoto", iAuth, iNewTempFolder, iImageMulter, iUploadAttendantPhoto)

//Stripe
ThankyRouter.post("/GetOrCreateConnectedAccount", iAuth, iGetOrCreateConnectedAccount)
//Public Stripe
ThankyRouter.post("/CreateCheckoutSession", iCreateCheckoutSession)

//Public
ThankyRouter.get("/LoadRecentPlaces", iLoadRecentPlaces)
ThankyRouter.get("/LoadPlaceJobs", iLoadPlaceJobs)
ThankyRouter.get("/LoadJob", iLoadJob)


export {
  ThankyRouter
}