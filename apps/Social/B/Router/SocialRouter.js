import express from "express"
import { iUnivAuth } from "../../../../libs/Core/Core1/StripeLogin/B/University/iUnivAuth.js"
import { iCreateProfile } from "./My/Profile/iCreateProfile.js"
import { iHasProfile } from "./My/Profile/iHasProfile.js"
import { iLoadProfile } from "./My/Profile/iLoadProfile.js"
import { iSaveProfile1 } from "./My/Profile/iSaveProfile1.js"
import { iSaveProfile2 } from "./My/Profile/iSaveProfile2.js"
import { iSaveProfile3 } from "./My/Profile/iSaveProfile3.js"
import { iSaveProfile4 } from "./My/Profile/iSaveProfile4.js"
import { iSaveProfile5 } from "./My/Profile/iSaveProfile5.js"

const SocialRouter = express.Router()


//My
SocialRouter.post("/CreateProfile", iUnivAuth, iCreateProfile)
SocialRouter.get("/HasProfile", iUnivAuth, iHasProfile)
SocialRouter.get("/LoadProfile", iUnivAuth, iLoadProfile)
SocialRouter.get("/SaveProfile1", iUnivAuth, iSaveProfile1)
SocialRouter.get("/SaveProfile2", iUnivAuth, iSaveProfile2)
SocialRouter.get("/SaveProfile3", iUnivAuth, iSaveProfile3)
SocialRouter.get("/SaveProfile4", iUnivAuth, iSaveProfile4)
SocialRouter.get("/SaveProfile5", iUnivAuth, iSaveProfile5)


export {
  SocialRouter
}