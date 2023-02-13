import Stripe from "stripe"
import { asyGetOrCreateThankyAccountId } from "../H/asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js" 

export async function iLoadConnectedAccountStatus(req, res) {
  try {
    
    const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

    const thankyAccount = await ThankyAccount.findById(thankyAccountId)

    if(!thankyAccount) {
      return res.json({ok:false, error: "Cannot find Thanky account" })
    }

    if(!thankyAccount.stripeConnectedAccountId) {
      return res.json({ok:true, setup: false, message: "Not connected to Stripe"})
    }
    
    //Get connected account
    const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)
    const connectedAccount = await stripe.accounts.retrieve(thankyAccount.stripeConnectedAccountId)

    if(!connectedAccount) {
      return res.json({ok:false, error: "Cannot find Stripe connected account" })
    }

    if(!connectedAccount.details_submitted) {
      return res.json({ok:true, setup: false, message: "details_submitted false"})
    }

    if(!connectedAccount.charges_enabled) {
      return res.json({ok:true, setup: false, message: "charges_enabled false"})
    }

    return res.json({ok: true, setup: true, email: connectedAccount.email})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}