import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../presentational/Navbar'
import ShoppingCart from '../presentational/ShoppingCart'
import * as shopActions from '../../redux/shop/shopActions'

function CheckOut(props) {
  return (
    <div className="checkout">
      <Navbar itemsInCart={props.itemsInCart}/>
      <ShoppingCart itemsInCart={props.itemsInCart} deleteEntireItemFromCart={props.deleteEntireItemFromCart} clearCart={props.clearCart}/>
    </div>
  )
}

const mapState = (state) => {
  return {
    itemsInCart: state.store.itemsInCart
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteEntireItemFromCart: (id) => dispatch(shopActions.deleteEntireItemFromCart(id)),
    clearCart: () => dispatch(shopActions.clearCart())
  }
}

export default connect(mapState,mapDispatch)(CheckOut)