import ThankyTipIntent from "../../Model/ThankyTipIntent.js"
import { VerifyStripeEvent } from "../H/VerifyStripeEvent.js"

export async function whCheckoutEvent(req, res) {
  try {

    const event = VerifyStripeEvent(req, res, process.env.THANKY_CHECKOUT_WEBHOOK_SECRET_KEY)

    const CheckoutEvent = {
      completed: "checkout.session.completed",
      succeeded: "checkout.session.async_payment_succeeded",
      failed: "checkout.session.async_payment_failed"
    }
    switch(event.type) {
      case CheckoutEvent.completed:
      case CheckoutEvent.succeeded:
      case CheckoutEvent.failed:
        break
      default:
        return res.send()
    }
    
    const checkoutSession = event.data.object
    const stripeCheckoutSessionId = checkoutSession.id

    if(!stripeCheckoutSessionId) {
      return res.send()
    }

    const tipIntent = await ThankyTipIntent.findOne({
      stripeCheckoutSessionId
    })

    if(!tipIntent) {
      return res.send()
    }

    switch(event.type) {
      case CheckoutEvent.completed:
        tipIntent.stripeCheckoutCompleted = true
        break
      case CheckoutEvent.succeeded:
        tipIntent.stripePaymentSucceeded = true
        break
      case CheckoutEvent.failed:
        tipIntent.stripePaymentFailed = true
        break
      default:
    }
 
    await tipIntent.save()

    // Return a 200 response to acknowledge receipt of the event
    return res.send();

  } catch(err) {
    console.log("whOnCheckoutCompleted Error: " + err.message)
    return res.sendStatus(500);
  }
}