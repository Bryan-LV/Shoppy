import React, {useEffect} from 'react'
import ProductCard from '../units/ProductCard'

export default function Main({visibleShop, addItem}) {

  useEffect(() => {
  }, [visibleShop])

  return (
    <div className="product-list-container" >
      {visibleShop.map( product => (
        <ProductCard
          product={product}
          addItem={addItem}
          key={product.id}
        />
      ))}
    </div>
  )
}
