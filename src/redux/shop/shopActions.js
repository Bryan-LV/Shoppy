import * as actionTypes from './shopTypes'

export const addItemToCart = (item) => ({ type: actionTypes.ADD_ITEM_TO_CART, payload: item });
export const removeItemFromCart = (id) => ({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: id });
export const deleteEntireItemFromCart = (id) => ({type: actionTypes.DELETE_ENTIRE_ITEM_FROM_CART, payload:id});
export const clearCart = () => ({type: actionTypes.CLEAR_CART});
export const selectCategory = (category) => ({type: actionTypes.SELECT_CATEGORY, payload: category});
export const resetCategory = () => ({type: actionTypes.RESET_CATEOGRY});

