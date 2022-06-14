import express from "express"
import { iUnivAuth } from "../../../../libs/Core/Core1/StripeLogin/B/University/iUnivAuth.js"
import { iCreateProfile } from "./My/Profile/iCreateProfile.js"
import { iHasProfile } from "./My/Profile/iHasProfile.js"

const SocialRouter = express.Router()


//My
SocialRouter.post("/CreateProfile", iUnivAuth, iCreateProfile)
SocialRouter.get("/HasProfile", iUnivAuth, iHasProfile)

export {
  SocialRouter
}