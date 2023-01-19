const router=require("express").Router()
const getcontroler=require("../controler/deleteProduct")
router.delete("/api/deleteproduct/:ProductID",getcontroler.deleteproduct)
module.exports={routerdelete:router}