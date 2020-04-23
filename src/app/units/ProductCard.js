import React from 'react'

export default function ProductCard({product, addItem}) {
  const {price} = product;
  const title = product.product;
  const category = product.department;

  const handleClick = (e) => {
    addItem(product);
  }
  
  return (
    <div className="product-card">
      <h4 className="product-card__title">{title}</h4>
      <h4 className="product-card__price">{price}</h4>
      <p className="product-card__category">{category}</p>
      <button className="product-card__btn" onClick={handleClick}>Add to cart</button>
    </div>
  )
}
