import { ADD_TASK } from './../actions/index';
import { REMOVE_TASK } from './../actions/index';

export default function(state = [], action) {
  console.log(state, action);
  switch (action.type) {

    case ADD_TASK:
    alert('adding')
      return [action.payload, ...state]
      break;

    case REMOVE_TASK:
    alert('removing')
      return state.filter(task => task !== action.payload);

    default:
    console.log('passing back default state');
      return state;
  }
}
