const {connection}=require("../configurationDatabase/config")
module.exports={
    addproduct:((req,res)=>{
        console.log(req.body)
        const query=`insert into products(productName,productDescription,productPrice,productRaiting,productImage)values("${req.body.productName}","${req.body.productDescription}","${req.body.productPrice}","${req.body.productRaiting}","${req.body.productImage}")`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    })
}