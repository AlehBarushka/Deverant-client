import { takeEvery, all, call, put } from 'redux-saga/effects';

import { CREATE_NEW_PROJECT_PENDING, GET_PROJECTS_PENDING } from '../actions';
import { KEY_NAMES } from '../constants/localStorage';

import {
  handleCloseModalAC,
  loadingPendingAC,
  loadingSuccessAC,
} from '../actionCreators/application';
import {
  createNewProjectFailureAC,
  createNewProjectSucessAC,
  getProjectsAC,
  getProjectsFailureAC,
  getProjectsSucessAC,
} from '../actionCreators/projects';

import { projectsAPI } from '../services/projects';

import { getItemFromLocalStorage } from '../utils/localStorage';
import { getAuthSatatusError } from '../utils/errorHandling';

function* getProjects({ payload }) {
  try {
    yield put(loadingPendingAC());

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthSatatusError();
    }

    const data = yield call(projectsAPI.getProjects, token, payload);

    yield put(getProjectsSucessAC(data));

    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(getProjectsFailureAC(error.message));

    yield put(loadingSuccessAC());
  }
}

function* createNewProject({ payload }) {
  try {
    const { projectName, projectDescription } = payload;

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthSatatusError();
    }

    yield call(projectsAPI.createNewProject, token, projectName, projectDescription);
    yield put(createNewProjectSucessAC());

    yield put(handleCloseModalAC());

    yield put(getProjectsAC());
  } catch (error) {
    yield put(createNewProjectFailureAC(error.message));
  }
}

export function projectSaga() {
  return all([
    takeEvery(GET_PROJECTS_PENDING, getProjects),
    takeEvery(CREATE_NEW_PROJECT_PENDING, createNewProject),
  ]);
}
