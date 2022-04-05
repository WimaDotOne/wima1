import express from "express"
const AnalyticsRouter = express.Router()
import { MonitorDailyPasscodeSend } from "./B/DailyEmail/MonitorDailyPasscodeSend.js"
import { iInsecureCountDailyVisit } from "./B/DailyVisit/iInsecureCountDailyVisit.js"

AnalyticsRouter.post('/CountDailyVisit', iInsecureCountDailyVisit)

export {
  MonitorDailyPasscodeSend,
  AnalyticsRouter
}