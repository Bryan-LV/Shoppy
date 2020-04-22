import * as actionTypes from './shopTypes'
import shopState from './shopState'

const shopReducer = (state = shopState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return {...state, itemsInCart: state.itemsInCart + 1};
      break;
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {...state, cartItems: state.filter(item => item !== action.payload)}
    default:
      return state;
      break;
  }
}

export default shopReducer