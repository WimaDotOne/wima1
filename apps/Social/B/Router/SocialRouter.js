import express from "express"
import { iUnivAuth } from "../../../../libs/Core/Core1/StripeLogin/B/University/iUnivAuth.js"
import { iCreateProfile } from "./My/Profile/iCreateProfile.js"
const SocialRouter = express.Router()


//My
SocialRouter.post("/CreateProfile", iUnivAuth,iCreateProfile)


export {
  SocialRouter
}