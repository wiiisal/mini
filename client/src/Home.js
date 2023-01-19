import React, { useEffect, useState } from 'react';
import './Home.css';
import './Product.css';
import axios from 'axios';
import Checkout from './Checkout';

export default function Home() {
  const[products,setProducts]=useState([])
  const[orders,setOrders]=useState([])
    useEffect(() => {
      axios.get('http://localhost:3002/api/getproduct').then((res) => setProducts(res.data))
        
    },[products])
  
 
   const deleteproduct=(ProductID)=>{
     axios.delete('http://localhost:3002/api/deleteproduct/'+ProductID).then((resp)=>console.log(resp)) ()}

   const addToCart=(productImage,productPrice,productName)=>{
   sessionStorage.setItem('product',JSON.stringify({productImage,productPrice,productName}))
   }
  return (
    <div className='home'>
      <img className='home_image' src='https://www.alizephyrcreations.com/wp-content/uploads/2020/10/restez-connect%C3%A9.jpg' alt='shopping'/>
      <div className='products'>
      {products.map(product => {
        return (
          <div >
         <div key={product.ProductID} className="card">
           <img className='imageproduct' src={product.productImage} alt="productimage" />
            <h1>{product.productName}</h1>
            <p className="price">{product.productPrice}</p>
            <p>{product.productDescription}</p>
            <p><button onClick={()=>{addToCart(product.productImage,product.productPrice,product.productName)}}>Add to Cart</button></p>
            <button onClick={() => {deleteproduct(product.ProductID)}}>remove</button>

         </div>
      
      </div>
        )
      })}
      </div>
        
    
    </div>
  )
}
