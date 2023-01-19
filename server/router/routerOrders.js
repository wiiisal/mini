const router=require("express").Router()
const getcontroler=require('../controler/orderget')
router.post("/api/postorder",getcontroler.addOrder)
module.exports={routerpostorder:router}