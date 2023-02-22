import express from "express"
import { whCheckoutWebhook } from "./Payout/whCheckoutWebhook.js"

const ThankyWebhook = express.Router()

//Dashboard
ThankyWebhook.post("/CheckoutWebhook", whCheckoutWebhook)

export {
  ThankyWebhook
}