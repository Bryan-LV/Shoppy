import React from 'react'
import cartIcon from '../../assets/icons/shopping-cart.png'

export default function Navbar({itemsInCart}) {
  // iterate through each item in cart
  // reduce all numbers into the length
  const addQuantity = (quantity, item) => {
    return quantity + item.quantity
  }
  
  const cartCount = itemsInCart.reduce(addQuantity, 0);

  return (
    <nav className="container-fluid nav">
      <h2>Shoppy React</h2>
      <h2> <span> <img src={cartIcon} alt=""/></span> {cartCount}</h2>
    </nav>
  )
}
