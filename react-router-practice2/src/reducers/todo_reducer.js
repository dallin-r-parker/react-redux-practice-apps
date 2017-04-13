import { ADD_ITEM, REMOVE_ITEM } from './../actions';

const initialState = []

export default function(state = initialState, action) {
  console.log('action from reducer: ', action);

  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
    console.log(action.payload);
      return state.filter((task, i) => action.payload !== i)
    default:
      return state
  }
}
