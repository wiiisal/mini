const{connection}=require('../configurationDatabase/config')
module.exports={
    getproduct:((req,res)=>{
        const query="select * from products"
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    })
}