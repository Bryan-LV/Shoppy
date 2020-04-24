import React from 'react'
import CartItem from '../units/CartItem'

export default function ShoppingCart({itemsInCart, deleteEntireItemFromCart}) {
  return (
    <div className="shopping-cart__container">
      <ul style={{padding:0}}>
        {itemsInCart.map(item => <CartItem key={item.id} item={item} deleteEntireItemFromCart={deleteEntireItemFromCart}/>)}
      </ul>
    </div>
  )
}
