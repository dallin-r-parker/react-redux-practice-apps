import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import CompletedReducer from './reducer_completed';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  tasks: TasksReducer,
  completed: CompletedReducer
});

export default rootReducer;
