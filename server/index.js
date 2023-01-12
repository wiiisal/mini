const express=require('express')
const app=express()
const port=3002
const cors=require("cors")
const cookieParser=require("cookie-parser")
const {routerget}=require("./router/routerget")
const {routerMail}=require("./router/routercontactmail")
const{routerMail2}=require("./router/routersuccessmail")
const{routerpostproduct}=require("./router/routerpost")
const{routerUpdate}=require("./router/routerupdateproduct")
const{routerpayment}=require("./router/routerpayment")
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:false,
        optionsSuccessStatus:200
    })
)
app.use(express.json())
app.use("/",routerpostproduct)
app.use("/",routerget)
app.use("/",routerUpdate)
app.use("/",routerMail)
app.use("/",routerMail2)
app.use("/",routerpayment)
app.listen(port,()=>{
    console.log("http://localhost:"+port)
})
