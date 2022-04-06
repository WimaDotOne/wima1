import express from "express"
import { iLoadApps } from "./iLoadApps.js"

const WimaHomeRouter = express.Router()


WimaHomeRouter.get('/LoadApps', iLoadApps)


export {
  WimaHomeRouter
}