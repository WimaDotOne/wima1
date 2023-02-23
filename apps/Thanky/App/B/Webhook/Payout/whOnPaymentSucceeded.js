import ThankyTipIntent from "../../Model/ThankyTipIntent.js";
import { VerifyStripeEvent } from "../H/VerifyStripeEvent.js";

export async function whOnPaymentSucceeded(req, res) {
  try {

    const event = VerifyStripeEvent(req, res)

    if(event.type !== "checkout.session.async_payment_succeeded") {
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

    tipIntent.stripePaymentSucceeded = true

    await tipIntent.save()

    // Return a 200 response to acknowledge receipt of the event
    return res.send();

  } catch(err) {
    console.log("whOnPaymentSucceeded Error: " + err.message)
    return res.sendStatus(500);
  }
}