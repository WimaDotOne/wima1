import Stripe from "stripe"

export async function whCheckoutWebhook(req, res) {
  try {
  
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

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const checkoutCompleted = event.data.object;
        
        break
      case 'checkout.session.async_payment_succeeded':
        const checkoutSucceeded = event.data.object;
        
        
        break
      case 'checkout.session.async_payment_failed':
        const checkoutFailed = event.data.object;

        break
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send();

  } catch(err) {
    console.log("whOnCheckout")
    return res.sendStatus(500);
  }
}