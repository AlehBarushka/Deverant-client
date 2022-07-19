import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_PENDING,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from '../actions';

export const loginPendingAC = loginData => ({
  type: LOGIN_PENDING,
  payload: loginData,
});

export const loginSuccessAC = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailureAC = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signUpPendingAC = registrationData => ({
  type: SIGNUP_PENDING,
  payload: registrationData,
});

export const signUpSuccessAC = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailureAC = error => ({
  type: SIGNUP_FAILURE,
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
