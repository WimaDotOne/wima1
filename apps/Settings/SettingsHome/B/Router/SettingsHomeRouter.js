import express from "express"
import { iLoadSettings } from "./iLoadSettings.js"

const SettingsHomeRouter = express.Router()

SettingsHomeRouter.get('/LoadSettings', iLoadSettings)

export {
  SettingsHomeRouter
}