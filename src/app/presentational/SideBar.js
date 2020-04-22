import React from 'react'

export default function SideBar({categories}) {
  const categoryList = [...new Set(categories.map(item => item.department))];

  return (
    <div className="sidebar">
      {categoryList.map((category, index) => <h4 className="category-link" key={index}>{category}</h4>)}
    </div>
  )
}
