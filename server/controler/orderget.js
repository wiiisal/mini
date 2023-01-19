const {connection}=require("../configurationDatabase/config")
module.exports={
    addOrder:((req,res)=>{
        console.log(req.body)
        const query= `insert into Orders(ProductID,totalprice)values("${req.body.ProductID}","${req.body.totalprice}")`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    })
}