import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shop/shopReducer'

export default configureStore({
  reducer: {
    store: shopReducer
  }
});
