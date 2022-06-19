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
import { iDeleteService } from "./My/Service/iDeleteService.js"

import { iLoadNeeds } from "./My/Need/iLoadNeeds.js"
import { iCreateNeed } from "./My/Need/iCreateNeed.js"
import { iSaveNeed } from "./My/Need/iSaveNeed.js"
import { iDeleteNeed } from "./My/Need/iDeleteNeed.js"

import { iLoadMyProfilePaper } from "./ProfilePaper/iLoadMyProfilePaper.js"
import { iLoadProfilePaper } from "./ProfilePaper/iLoadProfilePaper.js"

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
SocialRouter.post("/DeleteService", iUnivAuth, iDeleteService)

SocialRouter.get("/LoadNeeds", iUnivAuth, iLoadNeeds)
SocialRouter.post("/CreateNeed", iUnivAuth, iCreateNeed)
SocialRouter.post("/SaveNeed", iUnivAuth, iSaveNeed)
SocialRouter.post("/DeleteNeed", iUnivAuth, iDeleteNeed)

//Profile Paper 
SocialRouter.get("/LoadMyProfilePaper", iUnivAuth, iLoadMyProfilePaper)
SocialRouter.get("/LoadProfilePaper", iLoadProfilePaper)


export {
  SocialRouter
}