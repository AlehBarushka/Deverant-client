import { takeEvery, all, call, put } from 'redux-saga/effects';

import { LOGIN_PENDING, LOGOUT_PENDING, SIGNUP_PENDING } from '../actions';
import { KEY_NAMES } from '../constants/localStorage';

import {
  handleShowModalAC,
  loadingPendingAC,
  loadingSuccessAC,
} from '../actionCreators/application';
import {
  loginFailureAC,
  loginSuccessAC,
  logoutFailureAC,
  logoutSuccessAC,
  signUpSuccessAC,
} from '../actionCreators/auth';
import { setUserAC } from '../actionCreators/user';

import { authAPI } from '../services/auth';

import { tokenСonverter } from '../utils/authToken';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../utils/localStorage';

function* login({ payload }) {
  try {
    yield put(loadingPendingAC());

    const { secret_key, user_auth } = yield call(authAPI.login, payload);
    const token = tokenСonverter(secret_key, user_auth);
    yield call(setItemToLocalStorage, KEY_NAMES.AUTH_TOKEN, token);

    yield put(loginSuccessAC());

    //the crutch, it is planned that all data will come from the back
    const userObj = { email: payload.email, userName: 'in progress...' };
    yield put(setUserAC(userObj));

    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(loginFailureAC(error.message));
    yield put(loadingSuccessAC());
    yield put(handleShowModalAC());
  }
}

function* signUp({ payload }) {
  try {
    yield put(loadingPendingAC());

    const { secret_key, user_auth } = yield call(authAPI.createAccount, payload);
    const token = tokenСonverter(secret_key, user_auth);
    yield call(setItemToLocalStorage, KEY_NAMES.AUTH_TOKEN, token);

    yield put(signUpSuccessAC());

    //the crutch, it is planned that all data will come from the back
    const userObj = { email: payload.email, userName: payload.userName };
    yield put(setUserAC(userObj));

    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(loginFailureAC(error.message));
    yield put(loadingSuccessAC());
    yield put(handleShowModalAC());
  }
}

function* logout() {
  try {
    yield put(loadingPendingAC());

    const token = getItemFromLocalStorage(KEY_NAMES.AUTH_TOKEN);

    yield call(authAPI.logout, token);

    //deleting the token from local storage
    yield call(setItemToLocalStorage, KEY_NAMES.AUTH_TOKEN);

    yield put(logoutSuccessAC());
    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(logoutFailureAC(error.message));
  }
}

export function authSaga() {
  return all([
    takeEvery(LOGIN_PENDING, login),
    takeEvery(SIGNUP_PENDING, signUp),
    takeEvery(LOGOUT_PENDING, logout),
  ]);
}
