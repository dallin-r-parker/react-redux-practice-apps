import { ADD_COMPLETED } from './../actions/index';
import { REMOVE_COMPLETED } from './../actions/index';

export default function(state = [], action) {
  switch (action.type) {

    case ADD_COMPLETED:
      return [action.payload, ...state];
      break;

    case REMOVE_COMPLETED:
      return state.filter(task => task !== action.payload);

    default:
      return state;
  }
}
