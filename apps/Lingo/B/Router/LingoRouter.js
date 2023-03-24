import express from "express"
import { iLoadUnit } from "./iLoadUnit.js"
import { iLoadUnits } from "./iLoadUnits.js"
const LingoRouter = express.Router()

LingoRouter.get("/LoadUnits", iLoadUnits)
LingoRouter.get("/LoadUnit", iLoadUnit)

export {
  LingoRouter
}