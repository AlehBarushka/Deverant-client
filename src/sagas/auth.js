import { takeEvery, all, call, put } from 'redux-saga/effects';

import { loadingPendingAC, loadingSuccessAC } from '../actionCreators/application';
import { loginFailureAC, loginSuccessAC, signUpSuccessAC } from '../actionCreators/auth';
import { setUserAC } from '../actionCreators/user';

import { LOGIN_PENDING, SIGNUP_PENDING } from '../actions';
import { authAPI } from '../services/auth';

function* login({ payload }) {
  try {
    yield put(loadingPendingAC());

    const data = yield call(authAPI.login, payload);

    yield put(loginSuccessAC(data));

    //the crutch, it is planned that all data will come from the back
    const userObj = { email: payload.email, userName: 'in progress...' };

    yield put(setUserAC(userObj));

    yield put(loadingSuccessAC());
  } catch (error) {
    //if returns an error with the status false
    yield put(loginFailureAC(error.response?.data || error.message));
    yield put(loadingSuccessAC());
  }
}

function* signUp({ payload }) {
  try {
    yield put(loadingPendingAC());

    const data = yield call(authAPI.createAccount, payload);

    yield put(signUpSuccessAC(data));

    //the crutch, it is planned that all data will come from the back
    const userObj = { email: payload.email, userName: payload.userName };

    yield put(setUserAC(userObj));

    yield put(loadingSuccessAC());
  } catch (error) {
    //if returns an error with the status false
    yield put(loginFailureAC(error.response?.data || error.message));
    yield put(loadingSuccessAC());
  }
}

export function authSaga() {
  return all([takeEvery(LOGIN_PENDING, login), takeEvery(SIGNUP_PENDING, signUp)]);
}
