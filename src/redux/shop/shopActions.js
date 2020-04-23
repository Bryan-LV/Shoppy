import * as actionTypes from './shopTypes'

export const addItemToCart = (item) => ({ type: actionTypes.ADD_ITEM_TO_CART, payload: item });
export const deleteItemFromCart = (item) => ({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: item });
export const selectCategory = (category) => ({type: actionTypes.SELECT_CATEGORY, payload: category});

