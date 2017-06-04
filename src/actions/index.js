import { SIGNED_IN, USERS, SELECTED_USER } from '../constants';

export function logUser (user) {
  const action = {
    type: SIGNED_IN,
    user
  }
  return action;
}
export function usersList (users) {
  const action = {
    type: USERS,
    users
  }
  return action;
}
export function selectedUser (selectedUser) {
  const action = {
    type: SELECTED_USER,
    selectedUser
  }
  return action;
}
