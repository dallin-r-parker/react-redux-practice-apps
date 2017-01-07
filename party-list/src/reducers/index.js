import {combineReducers} from 'redux';
import PartyListReducer from './reducer_party_list';

const rootReducer = combineReducers({
  partyList: PartyListReducer
});

export default rootReducer;
