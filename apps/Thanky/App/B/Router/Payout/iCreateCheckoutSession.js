import Stripe from "stripe"
import { asyGetOrCreateThankyAccountId } from "../H/asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js" 
import ThankyJob from "../../Model/ThankyJob.js"

export async function iCreateCheckoutSession(req, res) {
  try {
    
    const jobId = req.body.jobId || ""
    const dollarIndex = +(req.body.dollarIndex || 0)

    let priceId = ""
    let appFee = 100
    switch(dollarIndex) {
      case 1:
        priceId = process.env.THANKY_TIP2_PRICE_ID
        appFee = 50
        break
      case 2:
        priceId = process.env.THANKY_TIP5_PRICE_ID
        appFee = 100
        break
      case 3:
        priceId = process.env.THANKY_TIP10_PRICE_ID
        appFee = 100
        break
      case 4:
        priceId = process.env.THANKY_TIP15_PRICE_ID
        appFee = 100
        break
      default:
        return res.json({ok:false, error: "Tip dollar amount is not recognized" })
    }

    if(!jobId) {
      return res.json({ok:false, error: "Job ID is missing" })
    }

    const job = await ThankyJob.findById(jobId).populate("thankyAccountId")

    if(!job) {
      return res.json({ok:false, error: "Cannot find the job object" })
    }

    const thankyAccount = job.thankyAccountId
    
    if(!thankyAccount) {
      return res.json({ok:false, error: "Cannot find the employee's Thanky account" })
    }

    if(!thankyAccount.stripeConnectedAccountId) {
      return res.json({ok:false, error: "Cannot find the employee's stripe account" })
    }
    
    //Create stripe checkout session i)
    const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{price: priceId, quantity: 1}],
      payment_intent_data: {
        application_fee_amount: appFee,
        transfer_data: {destination: thankyAccount.stripeConnectedAccountId},
      },
      success_url: `${process.env.DOMAIN}/apps/Thanky/Employee?jobId=${encodeURIComponent(jobId)}`,
      cancel_url: `${process.env.DOMAIN}/apps/Thanky/Employee?jobId=${encodeURIComponent(jobId)}`
    })

    console.log(session)
    return res.json({ok: true, session})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}