import express from "express"
import { iAuth } from "../../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iLoadHome } from "./Dashboard/iLoadHome.js"
import { iSaveJob } from "./Dashboard/iSaveJob.js"

const ThankyRouter = express.Router()

//Dashboard
ThankyRouter.get("/LoadHome", iAuth, iLoadHome)
ThankyRouter.post("/SaveJob", iAuth, iSaveJob)


export {
  ThankyRouter
}