import React, { useState } from 'react'

export default function ProductCard({ product, addItemToCart, removeItemFromCart}) {
  const { price } = product;
  const title = product.product;
  const category = product.department;
  const [isInCart, setIsInCart] = useState(false);
  const [itemsAdded, setItemsAdded] = useState(0);

  const handleClick = (e) => {
    addItemToCart(product);
    setIsInCart(true);
    setItemsAdded(prevItems => prevItems + 1);
  }

  const handleItemCount = (delta) => {
    if(delta === 'inc'){
      addItemToCart(product)
      setItemsAdded(prevItems => prevItems + 1)
      return;
    } else if(itemsAdded === 1 && delta === 'dec'){
      removeItemFromCart(product.id)
      setItemsAdded(prevItems => prevItems - 1);
      setIsInCart(false)
      return;
    } else {
        removeItemFromCart(product.id)
        setItemsAdded(prevItems => prevItems - 1);
    }
  }
  

  return (
    <div className="product-card">
      <h4 className="product-card__title">{title}</h4>
      <h4 className="product-card__price">{price}</h4>
      <p className="product-card__category">{category}</p>
      {isInCart  === false ?
        <button className="product-card__btn" onClick={handleClick}>Add to cart</button> :
        <div className="product-card__quantity-btn">
          <button className="product_card__delta-btns pointer" onClick={(() => handleItemCount('dec'))}>-</button>
          <p>{itemsAdded}</p>
          <button className="product_card__delta-btns pointer" onClick={(() => handleItemCount('inc'))}>+</button>
        </div>}
    </div>
  )
}
