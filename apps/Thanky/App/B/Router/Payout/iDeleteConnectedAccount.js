import Stripe from "stripe"
import { asyGetOrCreateThankyAccountId } from "../H/asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js" 

export async function iDeleteConnectedAccount(req, res) {
  try {
    
    const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

    const thankyAccount = await ThankyAccount.findById(thankyAccountId)

    if(!thankyAccount.stripeConnectedAccountId) {
      return res.json({ok:true, setup: false, message: "You are not connected to Stripe"})
    }
   
    // Try to delete connected account on stripe before modifying database
    // because delete may fail if balance is not 0
    const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)
    await stripe.accounts.del(thankyAccount.stripeConnectedAccountId)

    thankyAccount.stripeConnectedAccountId = undefined
    await thankyAccount.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}