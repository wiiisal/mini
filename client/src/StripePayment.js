import React, { useEffect, useState } from "react"; 
import Button from "react-bootstrap/Button"; 
import Card from "react-bootstrap/Card"; 
import { loadStripe } from "@stripe/stripe-js"; 

function StripePayment() { 
  const [product, setProduct] = useState();
  useEffect(()=>{
    var x=JSON.parse(sessionStorage.getItem('product'))
    console.log(x)

    setProduct(x)
  
},[])
  const makePayment = async () => { 
    const stripe = await loadStripe("pk_test_51MMpeeLCGPr2nafbYWwkEBXQjpYT71LyiSjxYPlWG4CcNNioN2ffbHwqFFZ7nQtENdfJmGUXxIcWY70P6jnSlJLm00ZcHNYLCX"); 
    const body = { product }; 
    const headers = { 
      "Content-Type": "application/json", 
    }; 
 
    const response = await fetch( 
      "http://localhost:3002/api/create-checkout-session", 
      { 
        method: "POST", 
        headers: headers, 
        body: JSON.stringify(body), 
      } 
    ); 
 
    const session = await response.json(); 
 
    const result = stripe.redirectToCheckout({ 
      sessionId: session.id, 
    }); 
 
    if (result.error) { 
      console.log(result.error); 
    } 
  }; 
  return ( 
    <Card style={{ width: "20rem" }}> 
      <Card.Img 
        variant="top" src={product?.productImage} 
      /> 
      <Card.Body> 
        <Card.Title>{product?.productName}</Card.Title> 
        <Card.Text>{product?.productPrice}</Card.Text> 
        <Button variant="primary" onClick={makePayment}> 
          Buy Now for {product?.price} 
        </Button> 
      </Card.Body> 
    </Card> 
  ); 
}  
export default StripePayment; 