import './Product.css'
import React from 'react'
import { useStateValue } from './StateProvider'



export default function Product({products}) {
  const[{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
  }

  return(
    <div>
      {products.map(product => {
        return (
          <div className='product'>
        <div className='product_info'>
          <h1>{product.productName}</h1>
          <p>{product.productDescription}</p>
          <p className='product_price'>
            <strong>{product.productPrice}</strong>
          </p>
          <div className='product_rating'>
          {  Array(product.productRaiting)
            .fill()
            .map((_)=>(<p>*</p>) )}
          </div>
        </div>
      <img src={product.productImage} alt='product_image'/>
      <button onClick={addToBasket}>buy now</button>
    </div>
        )
      })}
    </div>
  )
}
