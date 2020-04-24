import React from 'react'
import CartItem from '../units/CartItem'

export default function ShoppingCart({ itemsInCart, deleteEntireItemFromCart, clearCart }) {

  const addQuantity = (quantity, item) => quantity + item.quantity
  const cartCount = itemsInCart.reduce(addQuantity, 0);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const calcAmount = (acc, currentValue) => {
    // multiply amount of price by quantity
    const amount = +currentValue.quantity * +currentValue.price;
    // add that amount to total
    return acc + amount;
  }

  const totalAmount = itemsInCart.reduce(calcAmount, 0);
  const formatTotalAmount = formatNumber(totalAmount.toFixed(2));


  return (
    <div className="shopping-cart__container">
      <div className="shopping-cart-labels shopping-card__grid">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
      </div>
      <ul style={{ padding: 0 }}>
        {itemsInCart.map(item => <CartItem key={item.id} item={item} deleteEntireItemFromCart={deleteEntireItemFromCart} />)}
      </ul>
      <div className="shopping-cart__total shopping-card__grid">
        <h2>Total</h2>
        <h2>${formatTotalAmount}</h2>
        <h2>{cartCount}</h2>
        <h2 onClick={clearCart}>Remove All</h2>
      </div>
    </div>
  )
}
