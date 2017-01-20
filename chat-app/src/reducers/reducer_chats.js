import { GET_CHATS } from './../actions/actions';

export default function(state = [], action) {
  switch (action.type) {
    case GET_CHATS:
      console.log('from reducer', action.payload)
      return action.payload.data;
    default:
      return state;
  }
}
