import express from "express"
import { iLoadApps } from "./iLoadApps.js"

const WimaRouter = express.Router()


WimaRouter.get('/LoadApps', iLoadApps)


export {
  WimaRouter
}