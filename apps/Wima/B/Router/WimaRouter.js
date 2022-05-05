import express from "express"
import { iLoadApps } from "./iLoadApps.js"
import { iLoadMovicEnv } from "./WimaEnv/iLoadMovicEnv.js"

const WimaRouter = express.Router()


WimaRouter.get('/LoadApps', iLoadApps)

WimaRouter.get('/LoadMovicEnv', iLoadMovicEnv)


export {
  WimaRouter
}