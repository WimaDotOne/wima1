import Stripe from "stripe"
import { asyGetOrCreateThankyAccountId } from "../H/asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js" 

export async function iGetOrCreateConnectedAccount(req, res) {
  try {
    
    const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

    const thankyAccount = await ThankyAccount.findById(thankyAccountId)

    if(!thankyAccount) {
      return res.json({ok:false, error: "Cannot find Thanky account" })
    }
    
    //Create connected account i)
    const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)

    if(!thankyAccount.stripeConnectedAccountId) {
      //Create connected account ii)
      const connectedAccount = await stripe.accounts.create({
        type: "express"
      })

      if(!connectedAccount || !connectedAccount.id) {
        return res.json({ok:false, error: "Fail to create a Stripe connected account" })
      }

      thankyAccount.stripeConnectedAccountId = connectedAccount.id
      await thankyAccount.save()
    }

    const accountLink = await stripe.accountLinks.create({
      account: thankyAccount.stripeConnectedAccountId,
      refresh_url: `${process.env.DOMAIN}/apps/Thanky/Payouts/`,
      return_url: `${process.env.DOMAIN}/apps/Thanky/Payouts/`,
      type: "account_onboarding"
    })

    const accountUrl = accountLink?.url

    if(!accountUrl) {
      return res.json({ok:false, error: "Could not generate Stripe connected account url"})
    }

    return res.json({ok: true, accountUrl})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}