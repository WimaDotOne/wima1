import express from "express"
import { iAdminAuth } from "./iAdminAuth.js"
import { iAdminLogin } from "./iAdminLogin.js"
import { iAdminLogOut } from "./iAdminLogOut.js"
import { iIsAdminLoggedIn } from "./iIsAdminLoggedIn.js"
import { iLoadAdminApps } from "./iLoadAdminApps.js"

const AdminRouter = express.Router()


AdminRouter.get('/LoadAdminApps', iAdminAuth, iLoadAdminApps)

AdminRouter.post('/AdminLogin', iAdminLogin)
AdminRouter.get('/IsAdminLoggedIn', iIsAdminLoggedIn)
AdminRouter.post('/Logout', iAdminLogOut)


export {
  AdminRouter
}