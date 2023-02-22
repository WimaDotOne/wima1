import Stripe from "stripe"
import ThankyJob from "../../Model/ThankyJob.js"
import { ThankyConfig } from "../../../../../../bConfig.js"
import ThankyTipIntent from "../../Model/ThankyTipIntent.js"
import mongoose from "mongoose"

export async function iCreateCheckoutSession(req, res) {
  try {
    
    const jobId = req.body.jobId || ""
    const tipIndex = +(req.body.tipIndex || 0)
    const customerName = (req.body.customerName || "").trim()
    const customerComment = (req.body.customerComment || "").trim()

    let priceId = ""
    let appFee = 0
    switch(tipIndex) {
      case ThankyConfig.tip1.index:
        priceId = ThankyConfig.tip1.priceId
        appFee = ThankyConfig.tip1.appFee
        break
      case ThankyConfig.tip2.index:
        priceId = ThankyConfig.tip2.priceId
        appFee = ThankyConfig.tip2.appFee
        break
      case ThankyConfig.tip3.index:
        priceId = ThankyConfig.tip3.priceId
        appFee = ThankyConfig.tip3.appFee
        break
      case ThankyConfig.tip4.index:
        priceId = ThankyConfig.tip4.priceId
        appFee = ThankyConfig.tip4.appFee
        break
      default:
        return res.json({ok:false, error: "Tip dollar amount is not recognized" })
    }

    if(!jobId) {
      return res.json({ok:false, error: "Job Id is missing" })
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
      return res.json({ok:false, error: "Employee has not set up payment yet" })
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

    const nowUTC = Date.now()
    const thankyTipIntent = new ThankyTipIntent ({
      _id: mongoose.Types.ObjectId(),
      stripeCheckoutSessionId: session.id || "",
      jobId: job._id,
      tipIndex,
      customerName,
      customerComment,
      createdUTC: nowUTC
    })

    await thankyTipIntent.save()

    return res.json({ok: true, session})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}