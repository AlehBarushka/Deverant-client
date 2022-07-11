import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions';

const initialState = {
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, isAuthenticated: true, error: null };

    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default authReducer;
