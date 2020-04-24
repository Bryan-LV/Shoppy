import React, { useState } from 'react'

export default function SideBar({categories, selectCategory, resetCategory}) {
  const [categorySelected, setCategorySelected] = useState(null);
  const categoryList = [...new Set(categories.map(item => item.department))];

  const handleClick = (e, category) => {
    setCategorySelected(category);
    selectCategory(category)
  }
  
  const clearFilter = () => {
    resetCategory();
    setCategorySelected(null);
  }

  return (
    <div className="sidebar">
      {categorySelected ? (<div>
        <h4 className="filter-title">Filter: {categorySelected}</h4> 
        <p className="pointer" onClick={clearFilter}>clear filter</p>
      </div>): null}
      {categoryList.map((category, index) => <h4 className="category-link" key={index} onClick={(e) => handleClick(e, category)}>{category}</h4>)}
    </div>
  )
}
