const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
module.exports={
    payment:async (req, res) => { 
const {product} = req.body;
const session = await stripe.checkout.sessions.create({
 payment_method_types: ["card"],
 line_items: [ 
    { 
      price_data: { 
        currency: "inr", 
        product_data: { 
          name: product.name, 
        }, 
        unit_amount: product.price * 100, 
      }, 
      quantity: product.quantity, 
    }, 
  ], 
  mode: "payment", 
  success_url: "http://localhost:3000/success", 
  cancel_url: "http://localhost:3000/cancel", 
})
res.json({ id: session.id }); 
// console.log(session.total_details)
}
}
