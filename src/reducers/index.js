import { combineReducers } from 'redux';
import user from './reducer_user';
import users from './reducer_users';
import selectedUser from './reducer_selected_user';

export default combineReducers({
  user,
  users,
  selectedUser
})
