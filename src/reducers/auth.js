import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT_FAILURE, LOGOUT_SUCCESS } from '../actions';

const initialState = {
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, isAuthenticated: true, error: null };

    case AUTH_FAILURE:
    case LOGOUT_FAILURE:
      return { ...state, error: payload };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
