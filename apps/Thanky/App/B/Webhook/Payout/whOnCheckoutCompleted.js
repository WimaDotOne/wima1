import ThankyTipIntent from "../../Model/ThankyTipIntent.js";
import { VerifyStripeEvent } from "../H/VerifyStripeEvent.js";

export async function whOnCheckoutCompleted(req, res) {
  try {

    const event = VerifyStripeEvent(req, res)

    if(event.type !== "checkout.session.completed") {
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
      console.log("no tip intent found")
      return res.send()
    }
console.log("tip intent checkout complete save")
    tipIntent.stripeCheckoutCompleted = true

    await tipIntent.save()

    // Return a 200 response to acknowledge receipt of the event
    return res.send();

  } catch(err) {
    console.log("whOnCheckoutCompleted Error: " + err.message)
    return res.sendStatus(500);
  }
}