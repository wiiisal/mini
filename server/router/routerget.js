const router=require("express").Router()
const getcontroler=require("../controler/getProduct")
router.get("/api/getproduct",getcontroler.getproduct)
module.exports={routerget:router}