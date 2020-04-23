import * as actionTypes from './shopTypes'
import shopState from './shopState'

const shopReducer = (state = shopState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return {...state, itemsInCart: [...state.itemsInCart, action.payload]};
      break;
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {...state, itemsInCart: state.filter(item => item !== action.payload)};
    case actionTypes.SELECT_CATEGORY:
      // filter through visible shop, only return payload
      const filteredShopList = state.shop.filter(product => product.department === action.payload);
      return {...state, visibleShop: filteredShopList}
    default:
      return state;
      break;
  }
}

export default shopReducer