import React from 'react'
import {connect} from 'react-redux';
import db from '../../db';
import Main from '../presentational/Main'
import Navbar from '../presentational/Navbar'
import SideBar from '../presentational/SideBar'
import * as shopActions from '../../redux/shop/shopActions'

function Shop(props) {

  return (
    <div className="shop">
      <Navbar cart={props.itemsInCart}/>
      <SideBar categories={db}/>
      <Main/>
    </div>
  )
}

const mapState = (state) => {
  return {
    shop: state.store.shop,
    itemsInCart: state.store.itemsInCart
  }
}

const mapDispatch = (dispatch) => {
  return {
    addItem: () => dispatch(shopActions.addItemToCart())
  }
}



export default connect(mapState,mapDispatch)(Shop);