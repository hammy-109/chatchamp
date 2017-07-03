import { USERS } from '../constants';

let users = [];

export default (state = users, action) => {
  switch (action.type) {
    case USERS:
      const { users } = action;
      return users;
    default:
      return state;
  }
}
