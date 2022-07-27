import {
  LOGIN_PENDING,
  SIGNUP_PENDING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGOUT_PENDING,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  GET_AUTH_STATUS_PENDING,
} from '../actions';

export const getAuthStatusPendingAC = () => ({
  type: GET_AUTH_STATUS_PENDING,
});

export const loginPendingAC = loginData => ({
  type: LOGIN_PENDING,
  payload: loginData,
});

export const signUpPendingAC = registrationData => ({
  type: SIGNUP_PENDING,
  payload: registrationData,
});

export const authSuccessAC = () => ({
  type: AUTH_SUCCESS,
});

export const authFailureAC = error => ({
  type: AUTH_FAILURE,
  payload: error,
});

export const logoutAC = () => ({
  type: LOGOUT_PENDING,
});

export const logoutSuccessAC = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailureAC = error => ({
  type: LOGOUT_FAILURE,
  payload: error,
});
