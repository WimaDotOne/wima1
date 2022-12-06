import Stripe from "stripe"
import { asyGetTipAccount } from "../H/GetTipAccount.js"

export async function iConnectStripe(req, res) {
  try {
    
    const tipAccount = await asyGetTipAccount(req)
    
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    if(!tipAccount.stripeConnectedAccountId) {
      const connectedAccount = await stripe.accounts.create({
        type: "express"
      })

      if(!connectedAccount || !connectedAccount.id) {
        return res.json({ok:false, error: "Fails to create a Stripe connected account" })
      }

      tipAccount.stripeConnectedAccountId = connectedAccount.id
      await tipAccount.save()
    }

    const accountLinks = await stripe.accountLinks.create({
      account: tipAccount.stripeConnectedAccountId,
      refresh_url: `${process.env.DOMAIN}/apps/Tip/AppTurn/PaymentSetup/`,
      return_url: `${process.env.DOMAIN}/apps/Tip/AppTurn/PaymentSetup/`,
      type: "account_onboarding"
    })

    return res.json({ok: true, accountLinks})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}