// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51IAHYNI47zG2ByD9bR7py3JbpR8nRqSzTbKPIJfckFe8X6jaYHR2lLqhXa8EwEYU4wUsS68UV2ixvDwkmosGCMwh00hV0HyauV');

const paymentIntent = await stripe.paymentIntents.create({
    amount: 40000,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
});