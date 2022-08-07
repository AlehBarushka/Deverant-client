import { takeEvery, all, call, put } from 'redux-saga/effects';

import {
  CREATE_NEW_PROJECT_PENDING,
  DELETE_PROJECT_PENDING,
  GET_PROJECTS_PENDING,
} from '../actions';
import { KEY_NAMES } from '../constants/localStorage';

import {
  handleCloseActionModalAC,
  handleShowNotificationModalAC,
  loadingPendingAC,
  loadingSuccessAC,
} from '../actionCreators/application';
import {
  createNewProjectFailureAC,
  createNewProjectSucessAC,
  deleteProjectFailureAC,
  deleteProjectSucessAC,
  getProjectsAC,
  getProjectsFailureAC,
  getProjectsSucessAC,
} from '../actionCreators/projects';

import { projectsAPI } from '../services/projects';

import { getItemFromLocalStorage } from '../utils/localStorage';
import { apiResponseErrorDataConverter, getAuthSatatusError } from '../utils/errorHandling';

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

    yield put(handleCloseActionModalAC());

    yield put(getProjectsAC());
  } catch (error) {
    yield put(handleCloseActionModalAC());
    yield put(createNewProjectFailureAC(error.message));
    yield put(handleShowNotificationModalAC());
  }
}

function* deleteProject({ payload }) {
  try {
    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthSatatusError();
    }

    yield call(projectsAPI.deleteProject, token, payload);
    yield put(deleteProjectSucessAC());

    yield put(getProjectsAC());
  } catch ({ response: { data } }) {
    const errorMessage = yield apiResponseErrorDataConverter(data);

    yield put(deleteProjectFailureAC(errorMessage));
    yield put(handleShowNotificationModalAC());
  }
}

export function projectSaga() {
  return all([
    takeEvery(GET_PROJECTS_PENDING, getProjects),
    takeEvery(CREATE_NEW_PROJECT_PENDING, createNewProject),
    takeEvery(DELETE_PROJECT_PENDING, deleteProject),
  ]);
}
