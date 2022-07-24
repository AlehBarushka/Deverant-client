import { takeEvery, all, call, put } from 'redux-saga/effects';

import { GET_PROJECTS_PENDING } from '../actions';
import { KEY_NAMES } from '../constants/localStorage';

import { loadingPendingAC, loadingSuccessAC } from '../actionCreators/application';
import { getProjectsFailureAC, getProjectsSucessAC } from '../actionCreators/projects';

import { projectsAPI } from '../services/projects';

import { getItemFromLocalStorage } from '../utils/localStorage';
import { getAuthSatatusError } from '../utils/errorHandling';

function* getProjects() {
  try {
    yield put(loadingPendingAC());

    const token = getItemFromLocalStorage(KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      getAuthSatatusError();
    }

    const data = yield call(projectsAPI.getProjects, token);

    yield put(getProjectsSucessAC(data));

    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(getProjectsFailureAC(error.message));

    yield put(loadingSuccessAC());
  }
}

export function projectSaga() {
  return all([takeEvery(GET_PROJECTS_PENDING, getProjects)]);
}
