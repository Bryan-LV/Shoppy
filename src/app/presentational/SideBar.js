import React from 'react'

export default function SideBar({categories, selectCategory}) {
  const categoryList = [...new Set(categories.map(item => item.department))];

  return (
    <div className="sidebar">
      {categoryList.map((category, index) => <h4 className="category-link" key={index} onClick={() => selectCategory(category)}>{category}</h4>)}
    </div>
  )
}
