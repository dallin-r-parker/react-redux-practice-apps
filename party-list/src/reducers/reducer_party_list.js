import {FETCH_PARTY_LIST} from './../actions/index';
import {REMOVE_PARTY_GOER} from './../actions/index';

export default function(state = [], action) {
  console.log('current state: ', state);
  console.log('payload from reducer', action.payload);
  switch (action.type) {
  case FETCH_PARTY_LIST:
    return [action.payload, ...state];
      // return state;
  case REMOVE_PARTY_GOER:
    const newState = state.filter(payload => payload !== action.payload);
    return newState;
  default:
    return state;
  }
}
