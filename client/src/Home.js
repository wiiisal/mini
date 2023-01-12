import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product'
import axios from 'axios'

export default function Home() {
  const[products,setProducts]=useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3002/api/getproduct').then((res) => setProducts(res.data))
  },[])

  return (
    <div className='home'>
      <img className='home_image' src='https://www.alizephyrcreations.com/wp-content/uploads/2020/10/restez-connect%C3%A9.jpg' alt='shopping'/>
    
        <Product products={products}/> 
      
    </div>
  )
}
