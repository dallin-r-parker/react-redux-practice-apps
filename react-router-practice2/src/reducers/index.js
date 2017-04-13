import { combineReducers } from 'redux';
import todo_reducer from './todo_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
    todo: todo_reducer
})

export default rootReducer;
