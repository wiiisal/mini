const {connection}=require("../configurationDatabase/config")
module.exports={
    updateproduct:((req,res)=>{
        console.log(req.params.id)
        const query=`UPDATE products SET productName="${req.body.productName}",productDescription="${req.body.productDescription}",productPrice="${req.body.productPrice}",productRaiting="${req.body.productRaiting}",productImage="${req.body.productImage}" WHERE productID=${req.params.id}`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    })
}