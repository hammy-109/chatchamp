import { SIGNED_IN } from '../constants';

let user = {
  email: null,
  userName: null,
  key: null,
  photoUrl: null,
  time: null,
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const { user } = action;
      return user;
    default:
      return state;
  }
}
