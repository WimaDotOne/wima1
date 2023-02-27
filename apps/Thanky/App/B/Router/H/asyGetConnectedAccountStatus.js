import Stripe from "stripe"
import { ThankyConfig } from "../../../../../../bConfig.js"

export async function asyGetConnectedAccountStatus(stripeConnectedAccountId) {
  
  if(!stripeConnectedAccountId) {
    return ThankyConfig.connectedAccountStatus.setupNotStarted
  }
  
  //Get connected account
  const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)
  const connectedAccount = await stripe.accounts.retrieve(stripeConnectedAccountId)

  if(!connectedAccount) {
    throw new Error("Cannot find Stripe connected account")
  }

  if(!connectedAccount.details_submitted || !connectedAccount.charges_enabled) {
    return ThankyConfig.connectedAccountStatus.setupStarted
  }

  return ThankyConfig.connectedAccountStatus.setupFinished
}

