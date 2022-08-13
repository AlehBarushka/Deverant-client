import { takeEvery, all, call, put } from 'redux-saga/effects';

import { GET_AUTH_STATUS_PENDING, LOGIN_PENDING, LOGOUT_PENDING, SIGNUP_PENDING } from '../actions';
import { KEY_NAMES } from '../constants/localStorage';

import {
  handleShowNotificationModalAC,
  loadingPendingAC,
  loadingSuccessAC,
} from '../actionCreators/application';
import {
  authFailureAC,
  authSuccessAC,
  getAuthStatusPendingAC,
  logoutFailureAC,
  logoutSuccessAC,
} from '../actionCreators/auth';
import { setUserAC } from '../actionCreators/user';

import { authAPI } from '../services/auth';

import { tokenСonverter } from '../utils/authToken';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../utils/localStorage';
import { apiResponseErrorDataConverter, getAuthStatusError } from '../utils/errorHandling';

function* login({ payload }) {
  try {
    yield put(loadingPendingAC());

    const { secret_key, user_auth } = yield call(authAPI.login, payload);

    const token = yield tokenСonverter(secret_key, user_auth);
    yield call(setItemToLocalStorage, KEY_NAMES.AUTH_TOKEN, token);

    yield put(getAuthStatusPendingAC());
  } catch ({ response: { data } }) {
    const errorMessage = yield apiResponseErrorDataConverter(data);

    yield put(authFailureAC(errorMessage));
    yield put(loadingSuccessAC());
    yield put(handleShowNotificationModalAC());
  }
}

function* signUp({ payload }) {
  try {
    yield put(loadingPendingAC());

    const { secret_key, user_auth } = yield call(authAPI.createAccount, payload);

    const token = yield tokenСonverter(secret_key, user_auth);
    yield call(setItemToLocalStorage, KEY_NAMES.AUTH_TOKEN, token);

    yield put(getAuthStatusPendingAC());
  } catch ({ response: { data } }) {
    const errorMessage = yield apiResponseErrorDataConverter(data);

    yield put(authFailureAC(errorMessage));
    yield put(loadingSuccessAC());
    yield put(handleShowNotificationModalAC());
  }
}

function* logout() {
  try {
    yield put(loadingPendingAC());

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    yield call(authAPI.logout, token);

    //deleting the token from local storage
    yield call(setItemToLocalStorage, KEY_NAMES.AUTH_TOKEN);

    yield put(logoutSuccessAC());
    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(logoutFailureAC(error.message));
  }
}

function* getAuthStatus() {
  try {
    yield put(loadingPendingAC());

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);
    if (!token) {
      yield getAuthStatusError();
    }

    const { email, nickname } = yield call(authAPI.authStatus, token);

    yield put(authSuccessAC());

    const userObj = { email: email, userName: nickname };
    yield put(setUserAC(userObj));

    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(authFailureAC(error.message));
    console.error(error);
    yield put(loadingSuccessAC());
  }
}

export function authSaga() {
  return all([
    takeEvery(GET_AUTH_STATUS_PENDING, getAuthStatus),
    takeEvery(LOGIN_PENDING, login),
    takeEvery(SIGNUP_PENDING, signUp),
    takeEvery(LOGOUT_PENDING, logout),
  ]);
}
