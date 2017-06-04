import { SELECTED_USER } from '../constants';

let selectedUser = {
  email: null,
  userName: null,
  key: null
}

export default (state = selectedUser, action) => {
  switch (action.type) {
    case SELECTED_USER:
      const { selectedUser } = action;
      return selectedUser;
    default:
      return state;
  }
}
