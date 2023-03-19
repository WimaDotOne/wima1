import express from "express"
import { iAdminAuth } from "../../../WimaAdmin/B/Router/iAdminAuth.js"
import { iCreateUnit } from "./iCreateUnit.js"
import { iLoadLanguageUnits } from "./iLoadLanguageUnits.js"

const LingoAdminRouter = express.Router()

LingoAdminRouter.post('/CreateUnit', iAdminAuth, iCreateUnit)
LingoAdminRouter.get('/LoadLanguageUnits', iAdminAuth, iLoadLanguageUnits)

export {
  LingoAdminRouter
}