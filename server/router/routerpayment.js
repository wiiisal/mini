const router=require("express").Router()
const postcontroler=require("../controler/payment")
router.post("/api/create-checkout-session",postcontroler.payment)
module.exports={routerpayment:router}
