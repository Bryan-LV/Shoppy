import * as actionTypes from './shopTypes'
import shopState from './shopState'


// SHOP STATE TREE
//{
//   shop: [...db],
//   visibleShop:[...db],
//   itemsInCart:[]
// }

const shopReducer = (state = shopState, action) => {
  switch (action.type) {

    case actionTypes.ADD_ITEM_TO_CART:
      let copyItemsInCart;
      const checkItemExists = state.itemsInCart.some(item => item.id === action.payload.id);
      if(checkItemExists){
        copyItemsInCart = state.itemsInCart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item);
      } else {
        copyItemsInCart = [...state.itemsInCart, {...action.payload, quantity: 1}];
      }
      return {...state, itemsInCart: copyItemsInCart};

    case actionTypes.REMOVE_ITEM_FROM_CART:
      // find the item in cart & decrement quantity
      const editQuantity = state.itemsInCart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item);
      // check if quantity then equals zero
      const filteredItemsInCart = editQuantity.filter(item => item.quantity !== 0);
      return {...state, itemsInCart: filteredItemsInCart};

    case actionTypes.SELECT_CATEGORY:
      const filteredShopList = state.shop.filter(product => product.department === action.payload);
      return {...state, visibleShop: filteredShopList}

    case actionTypes.RESET_CATEOGRY:
      return {...state, visibleShop:[...state.shop]};

    default:
      return state;
  }
}

export default shopReducer