import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
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
