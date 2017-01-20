import { combineReducers } from 'redux';
import ChatsReducer from './reducer_chats';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  chats: ChatsReducer
});

export default rootReducer;
