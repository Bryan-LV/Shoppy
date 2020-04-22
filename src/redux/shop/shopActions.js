import * as actionTypes from './shopTypes'

export const addItemToCart = () => ({ type: actionTypes.ADD_ITEM_TO_CART });
export const deleteItemFromCart = (item) => ({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: item });
