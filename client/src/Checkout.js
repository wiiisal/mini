import React from 'react'
import { useStateValue } from './StateProvider'

export default function Checkout() {
    const[{basket}]=useStateValue()
  return (
    <div className='checkout'>
      
    </div>
  )
}
