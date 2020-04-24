import React from 'react'
import cartIcon from '../../assets/icons/shopping-cart.png'
import { Link } from 'react-router-dom';

export default function Navbar({itemsInCart}) {
  // iterate through each item in cart, reduce all numbers into the length
  const addQuantity = (quantity, item) => quantity + item.quantity
  const cartCount = itemsInCart.reduce(addQuantity, 0);

  return (
    <nav className="container-fluid nav">
      <Link to="/"><h2>Shoppy React</h2></Link>
      <Link to="/checkout"><h2 className="pointer"> <span> <img src={cartIcon} alt=""/></span> {cartCount}</h2></Link>
    </nav>
  )
}
