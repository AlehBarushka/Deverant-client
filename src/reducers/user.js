import { LOGOUT_SUCCESS, SET_USER } from '../actions';

const initialState = {
  email: '',
  userName: '',
  isActivated: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, email: payload.email, userName: payload.userName };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
