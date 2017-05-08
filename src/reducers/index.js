import { combineReducers } from 'redux';
import user from './reducer_user';
import users from './reducer_users';

export default combineReducers({
  user,
  users
})
