import { SIGNED_IN, USERS } from '../constants';

export function logUser (email) {
  const action = {
    type: SIGNED_IN,
    email
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
