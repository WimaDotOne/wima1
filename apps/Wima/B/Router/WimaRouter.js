import express from "express"
import { iLoadApps } from "./iLoadApps.js"
import { iLoadWimaEnv } from "./WimaEnv/iLoadWimaEnv.js"

const WimaRouter = express.Router()


WimaRouter.get('/LoadApps', iLoadApps)

WimaRouter.get('/LoadWimaEnv', iLoadWimaEnv)


export {
  WimaRouter
}