import { combineReducers } from 'redux';
import lobbyReducer from './lobbyReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  lobby: lobbyReducer
});
