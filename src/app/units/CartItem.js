import React from 'react'

export default function CartItem({item, deleteEntireItemFromCart}) {
  return (
    <li className="cart-item shopping-card__grid">
    <span className="" >{item.product}</span>
    <span className="" >{item.price}</span>
    <span className="" >{item.quantity}</span>
    <span className="pointer" onClick={() => deleteEntireItemFromCart(item.id)}>Delete</span>
  </li>
  )
}
