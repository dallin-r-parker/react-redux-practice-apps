import {ADD_TASK} from './../actions/index';

const initialState = {
  newTasks: [],
  completedTasks: []
};

export default function(state = initialState, action) {
  console.log(state, action);
}
