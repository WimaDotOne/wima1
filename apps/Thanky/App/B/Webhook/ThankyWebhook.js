import express from "express"
import { whCheckoutEvent } from "./Payout/whCheckoutEvent.js"

const ThankyWebhook = express.Router()

//Dashboard
ThankyWebhook.post("/CheckoutEvent", whCheckoutEvent)

export {
  ThankyWebhook
}