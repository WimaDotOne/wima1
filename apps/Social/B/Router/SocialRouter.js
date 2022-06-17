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

import { iLoadServices } from "./My/Service/iLoadServices.js"
import { iCreateService } from "./My/Service/iCreateService.js"
import { iSaveService } from "./My/Service/iSaveService.js"

const SocialRouter = express.Router()


//My
SocialRouter.post("/CreateProfile", iUnivAuth, iCreateProfile)
SocialRouter.get("/HasProfile", iUnivAuth, iHasProfile)
SocialRouter.get("/LoadProfile", iUnivAuth, iLoadProfile)
SocialRouter.post("/SaveProfile1", iUnivAuth, iSaveProfile1)
SocialRouter.post("/SaveProfile2", iUnivAuth, iSaveProfile2)
SocialRouter.post("/SaveProfile3", iUnivAuth, iSaveProfile3)
SocialRouter.post("/SaveProfile4", iUnivAuth, iSaveProfile4)
SocialRouter.post("/SaveProfile5", iUnivAuth, iSaveProfile5)


SocialRouter.get("/LoadServices", iUnivAuth, iLoadServices)
SocialRouter.post("/CreateService", iUnivAuth, iCreateService)
SocialRouter.post("/SaveService", iUnivAuth, iSaveService)


export {
  SocialRouter
}