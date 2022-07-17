import { takeEvery, all, call, put } from 'redux-saga/effects';

import { LOGIN_PENDING, SIGNUP_PENDING } from '../actions';
import { fieldName } from '../constants/localStorage';

import {
  handleShowModalAC,
  loadingPendingAC,
  loadingSuccessAC,
} from '../actionCreators/application';
import { loginFailureAC, loginSuccessAC, signUpSuccessAC } from '../actionCreators/auth';
import { setUserAC } from '../actionCreators/user';

import { authAPI } from '../services/auth';

import { tokenСonverter } from '../utils/authToken';
import { setToLocalStorage } from '../utils/localStorage';

function* login({ payload }) {
  try {
    yield put(loadingPendingAC());

    const { secret_key, user_auth } = yield call(authAPI.login, payload);

    const token = tokenСonverter(secret_key, user_auth);

    yield call(setToLocalStorage, fieldName.AUTH_TOKEN, token);

    yield put(loginSuccessAC());

    //the crutch, it is planned that all data will come from the back
    const userObj = { email: payload.email, userName: 'in progress...' };

    yield put(setUserAC(userObj));

    yield put(loadingSuccessAC());
  } catch (error) {
    //if returns an error with the status false
    yield put(loginFailureAC(error.response?.data || error.message));
    yield put(loadingSuccessAC());
    yield put(handleShowModalAC());
  }
}

function* signUp({ payload }) {
  try {
    yield put(loadingPendingAC());

    const { secret_key, user_auth } = yield call(authAPI.createAccount, payload);

    const token = tokenСonverter(secret_key, user_auth);

    yield call(setToLocalStorage, fieldName.AUTH_TOKEN, token);

    //the crutch, it is planned that all data will come from the back
    const userObj = { email: payload.email, userName: payload.userName };

    yield put(setUserAC(userObj));

    yield put(signUpSuccessAC());

    yield put(loadingSuccessAC());
  } catch (error) {
    //if returns an error with the status false
    yield put(loginFailureAC(error.response?.data || error.message));
    yield put(loadingSuccessAC());
    yield put(handleShowModalAC());
  }
}

export function authSaga() {
  return all([takeEvery(LOGIN_PENDING, login), takeEvery(SIGNUP_PENDING, signUp)]);
}
