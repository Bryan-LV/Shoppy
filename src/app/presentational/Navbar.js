import React from 'react'

export default function Navbar({cart}) {
  return (
    <nav className="container-fluid nav">
      <h2>Shoppy React</h2>
      <h2>{cart}</h2>
    </nav>
  )
}
