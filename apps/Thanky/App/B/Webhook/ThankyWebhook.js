import express from "express"
import { whOnCheckoutCompleted } from "./Payout/whOnCheckoutCompleted.js"

const ThankyWebhook = express.Router()

//Dashboard
ThankyWebhook.post("/CheckoutCompleted", whOnCheckoutCompleted)

export {
  ThankyWebhook
}