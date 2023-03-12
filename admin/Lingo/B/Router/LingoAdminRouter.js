import express from "express"
import { iAdminAuth } from "../../../WimaAdmin/B/Router/iAdminAuth.js"
import { iCreateUnit } from "./iCreateUnit.js"

const LingoAdminRouter = express.Router()

LingoAdminRouter.get('/CreateUnit', iAdminAuth, iCreateUnit)

export {
  LingoAdminRouter
}