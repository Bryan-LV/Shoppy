import React, {useEffect} from 'react'
import ProductCard from '../units/ProductCard'

export default function Main({visibleShop, addItemToCart, removeItemFromCart}) {

  useEffect(() => {
  }, [visibleShop])

  return (
    <div className="product-list-container" >
      {visibleShop.map( product => (
        <ProductCard
          product={product}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          key={product.id}
        />
      ))}
    </div>
  )
}
