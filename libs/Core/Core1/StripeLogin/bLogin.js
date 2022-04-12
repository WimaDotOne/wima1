import express from "express"
const LoginRouter = express.Router()

import { iGoogleLogIn } from "./B/Google/iGoogleLogIn.js"
import { iFacebookLogIn } from "./B/Facebook/iFacebookLogIn.js"
import { iGoogleAuth } from "./B/Google/iGoogleAuth.js"
import { iFacebookAuth } from "./B/Facebook/iFacebookAuth.js"
import { iSendPasscode } from "./B/Email/iSendPasscode.js"
import { iEmailLogin } from "./B/Email/iEmailLogin.js"
import { iLogOut } from "./B/iLogOut.js"
import { iIsLoggedIn } from "./B/iIsLoggedIn.js"
import { iAuth } from "./B/iAuth.js"
import { iLoadLogin } from "./B/iLoadLogin.js"


LoginRouter.post('/GoogleLogIn', iGoogleAuth, iGoogleLogIn)
LoginRouter.post('/FacebookLogIn', iFacebookAuth, iFacebookLogIn)
LoginRouter.post('/IsLoggedIn', iIsLoggedIn)
LoginRouter.post("/LoadLogin", iAuth, iLoadLogin)
LoginRouter.post('/Logout', iAuth, iLogOut)
LoginRouter.post('/SendPasscode', iSendPasscode)
LoginRouter.post('/EmailLogin', iEmailLogin)


export {
  LoginRouter
}