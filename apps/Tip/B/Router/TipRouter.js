import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateMyJob } from "./Attendant/iCreateMyJob.js"
import { iLoadMyJobs } from "./Attendant/iLoadMyJobs.js"
import { iLoadMyJob } from "./Attendant/iLoadMyJob.js"
import { iDeleteMyJob } from "./Attendant/iDeleteMyJob.js"
import { iSaveJobName } from "./Attendant/iSaveJobName.js"
import { iSaveIsJobPublic } from "./Attendant/iSaveIsJobPublic.js"
import { iSaveAboutMe } from "./Attendant/iSaveAboutMe.js"
import { iSavePlace } from "./Attendant/iSavePlace.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iImageMulter } from "../../../../libs/Core/Core1/bCore1.js"
import { iUploadAttendantPhoto } from "./ImageUpload/iUploadAttendantPhoto.js"
import { iLoadEstablishmentJobs } from "./GiveTips/iLoadEstablishmentJobs.js"
import { iConnectStripe } from "./Payment/iConnectStripe.js"

const TipRouter = express.Router()

//Jobs
TipRouter.get("/LoadMyJobs", iAuth, iLoadMyJobs)
TipRouter.get("/LoadMyJob", iAuth, iLoadMyJob)

TipRouter.post("/CreateMyJob", iAuth, iCreateMyJob)
TipRouter.post("/DeleteMyJob", iAuth, iDeleteMyJob)
TipRouter.post("/SaveJobName", iAuth, iSaveJobName)
TipRouter.post("/SaveIsJobPublic", iAuth, iSaveIsJobPublic)
TipRouter.post("/SaveAboutMe", iAuth, iSaveAboutMe)
TipRouter.post("/SavePlace", iAuth, iSavePlace)


//Upload Image
TipRouter.post("/UploadAttendantPhoto", iAuth, iNewTempFolder, iImageMulter, iUploadAttendantPhoto)

//Payment
TipRouter.post("/ConnectStripe", iAuth, iConnectStripe)

// Give Tips
TipRouter.get("/LoadEstablishmentJobs", iLoadEstablishmentJobs)


export {
  TipRouter
}