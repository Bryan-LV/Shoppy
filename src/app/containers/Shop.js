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
      <Navbar itemsInCart={props.itemsInCart}/>
      <main className="main">
        <SideBar categories={db} selectCategory={props.selectCategory}/>
        <Main addItem={props.addItem} visibleShop={props.visibleShop}/>
      </main>
    </div>
  )
}

const mapState = (state) => {
  return {
    visibleShop: state.store.visibleShop,
    itemsInCart: state.store.itemsInCart
  }
}

const mapDispatch = (dispatch) => {
  return {
    addItem: (item) => dispatch(shopActions.addItemToCart(item)),
    selectCategory: (category) => dispatch(shopActions.selectCategory(category))
  }
}



export default connect(mapState,mapDispatch)(Shop);