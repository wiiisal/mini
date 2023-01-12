const router=require("express").Router()
const mailcontroler=require("../controler/successmail")
router.post('/api/sendmail2',mailcontroler.nodemail)
module.exports={routerMail2:router}