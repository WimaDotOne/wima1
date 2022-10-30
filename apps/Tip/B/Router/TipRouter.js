import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateMyJob } from "./Attendant/iCreateMyJob.js"
import { iLoadMyJobs } from "./Attendant/iLoadMyJobs.js"
import { iDeleteMyJob } from "./Attendant/iDeleteMyJob.js"

const TipRouter = express.Router()

//Jobs
TipRouter.get("/LoadMyJobs", iAuth, iLoadMyJobs)
TipRouter.post("/CreateMyJob", iAuth, iCreateMyJob)
TipRouter.post("/DeleteMyJob", iAuth, iDeleteMyJob)

export {
  TipRouter
}