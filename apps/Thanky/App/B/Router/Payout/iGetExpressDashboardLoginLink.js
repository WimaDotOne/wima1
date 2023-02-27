import Stripe from "stripe"
import { asyGetOrCreateThankyAccountId } from "../H/asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js" 

export async function iGetExpressDashboardLoginLink(req, res) {
  try {
    
    const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

    const thankyAccount = await ThankyAccount.findById(thankyAccountId)

    if(!thankyAccount) {
      return res.json({ok:false, error: "Cannot find Thanky account" })
    }

    const stripeConnectedAccountId = thankyAccount.stripeConnectedAccountId
    
    if(!stripeConnectedAccountId) {
      return res.json({ok:false, error: "Cannot find Stripe Connected Account" })
    }
    
    const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)

    const loginLink = await stripe.accounts.createLoginLink(stripeConnectedAccountId)

    const url = loginLink?.url

    if(!url) {
      return res.json({ok:false, error: "Could not generate Stripe Connected Account Express Dashboard login url"})
    }

    return res.json({ok: true, url})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}