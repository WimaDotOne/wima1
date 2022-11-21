import Stripe from "stripe"

export async function iCreateConnectAccount(req, res) {
  try {
  
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    
    const account = await stripe.accounts.create({
      type: "express"
    })

    const accountLink = await stripe.accountLinks.create({
      account: process.env.STRIPE_WIMA_ACCOUNT,
      refresh_url: "",
      return_url: "",
      type: "account_onboarding"
    })

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}