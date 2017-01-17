import { combineReducers } from 'redux';
import Cart from './reducer_cart';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  cart: Cart
});

export default rootReducer;
