import express from "express"
import { whOnCheckoutCompleted } from "./Payout/whOnCheckoutCompleted.js"
import { whOnPaymentFailed } from "./Payout/whOnPaymentFailed.js"
import { whOnPaymentSucceeded } from "./Payout/whOnPaymentSucceeded.js"

const ThankyWebhook = express.Router()

//Dashboard
ThankyWebhook.post("/CheckoutCompleted", whOnCheckoutCompleted)
ThankyWebhook.post("/PaymentSucceeded", whOnPaymentSucceeded)
ThankyWebhook.post("/PaymentFailed", whOnPaymentFailed)

export {
  ThankyWebhook
}