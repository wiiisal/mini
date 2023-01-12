const router=require("express").Router()
const getcontroler=require('../controler/postProduct')
router.post("/api/postproduct",getcontroler.addproduct)
module.exports={routerpostproduct:router}