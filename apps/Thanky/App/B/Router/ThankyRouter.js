import express from "express"
import { iImageMulter } from "../../../../../libs/Core/Core1/bCore1.js"
import { iAuth } from "../../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iDeleteTipIntents } from "./Dashboard/iDeleteTipIntents.js"
import { iLoadHome } from "./Dashboard/iLoadHome.js"
import { iLoadTipIntents } from "./Dashboard/iLoadTipIntents.js"
import { iSaveJob } from "./Dashboard/iSaveJob.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadAttendantPhoto } from "./ImageUpload/iUploadAttendantPhoto.js"
import { iCreateCheckoutSession } from "./Payout/iCreateCheckoutSession.js"
import { iDeleteConnectedAccount } from "./Payout/iDeleteConnectedAccount.js"
import { iGetExpressDashboardLoginLink } from "./Payout/iGetExpressDashboardLoginLink.js"
import { iGetOrCreateConnectedAccount } from "./Payout/iGetOrCreateConnectedAccount.js"
import { iLoadConnectedAccountStatus } from "./Payout/iLoadConnectedAccountStatus.js"
import { iLoadJob } from "./Public/iLoadJob.js"
import { iLoadPlaceJobs } from "./Public/iLoadPlaceJobs.js"
import { iLoadRecentPlaces } from "./Public/iLoadRecentPlaces.js"

const ThankyRouter = express.Router()

//Dashboard
ThankyRouter.get("/LoadHome", iAuth, iLoadHome)
ThankyRouter.get("/LoadTipIntents", iAuth, iLoadTipIntents)
ThankyRouter.post("/SaveJob", iAuth, iSaveJob)
ThankyRouter.post("/DeleteTipIntents", iAuth, iDeleteTipIntents)

//image upload
ThankyRouter.post("/UploadAttendantPhoto", iAuth, iNewTempFolder, iImageMulter, iUploadAttendantPhoto)

//Stripe
ThankyRouter.post("/GetOrCreateConnectedAccount", iAuth, iGetOrCreateConnectedAccount)
ThankyRouter.get("/LoadConnectedAccountStatus", iAuth, iLoadConnectedAccountStatus)
ThankyRouter.post("/DeleteConnectedAccount", iAuth, iDeleteConnectedAccount)
ThankyRouter.get("/GetExpressDashboardLoginLink", iAuth, iGetExpressDashboardLoginLink)

//Public Stripe
ThankyRouter.post("/CreateCheckoutSession", iCreateCheckoutSession)

//Public
ThankyRouter.get("/LoadRecentPlaces", iLoadRecentPlaces)
ThankyRouter.get("/LoadPlaceJobs", iLoadPlaceJobs)
ThankyRouter.get("/LoadJob", iLoadJob)


export {
  ThankyRouter
}