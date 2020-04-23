import React from 'react'
import cartIcon from '../../assets/icons/shopping-cart.png'

export default function Navbar({itemsInCart}) {
  const cartCount = itemsInCart.length;

  return (
    <nav className="container-fluid nav">
      <h2>Shoppy React</h2>
      <h2> <span> <img src={cartIcon} alt=""/></span> {cartCount}</h2>
    </nav>
  )
}
