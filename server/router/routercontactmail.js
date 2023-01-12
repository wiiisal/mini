const router=require("express").Router()
const mailcontroler=require("../controler/contactmail")
router.post('/api/sendmail',mailcontroler.nodemail)
module.exports={routerMail:router}