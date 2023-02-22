import Stripe from "stripe"

export function VerifyStripeEvent(req, res) {

  let event = req.body
  
  const stripe = new Stripe(process.env.THANKY_STRIPE_SECRET_KEY)
  const endpointSecret = process.env.THANKY_WEBHOOK_SECRET_KEY

  if(endpointSecret) {
    // Only verify the event if you have an endpoint secret defined.
    // Get the signature sent by Stripe
    const signature = req.headers['stripe-signature']

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }
  }

  return event
}