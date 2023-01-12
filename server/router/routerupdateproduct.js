const router=require("express").Router()
const getcontroler=require('../controler/updateproduct')
router.put("/api/updateproduct/:id",getcontroler.updateproduct)
module.exports={routerUpdate:router}