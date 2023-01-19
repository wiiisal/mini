import React from 'react'
import StripePayment from './StripePayment'

export default function Checkout() {
  return (
    <div className='checkout'>
      <StripePayment/>
    </div>
  )
}
