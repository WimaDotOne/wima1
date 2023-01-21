import express from "express"
import { iAuth } from "../../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iLoadHome } from "./Dashboard/iLoadHome.js"

const ThankyRouter = express.Router()

//Dashboard
ThankyRouter.get("/LoadHome", iAuth, iLoadHome)


export {
  ThankyRouter
}