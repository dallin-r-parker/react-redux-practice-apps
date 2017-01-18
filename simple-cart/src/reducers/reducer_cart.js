import { ADD_TO_CART } from './../actions/index';
import { REMOVE_FROM_CART } from './../actions/index';


export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.payload, ...state];
    case REMOVE_FROM_CART:
      alert(action.payload);
      console.log(state)
      const newState = state.filter((itemIndex, index) => {
        if(index !== action.payload) {
          return itemIndex;
        }
      });
      return newState;
    default:
      return state;
  }
}
