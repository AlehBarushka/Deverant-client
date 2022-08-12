import { takeEvery, all, call, put } from 'redux-saga/effects';

import {
  CREATE_NEW_PROJECT_PENDING,
  DELETE_PROJECT_PENDING,
  GET_PROJECTS_PENDING,
  GET_PROJECT_PENDING,
  UPDATE_PROJECT_PENDING,
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
  createNewProjectSuccessAC,
  deleteProjectFailureAC,
  deleteProjectSuccessAC,
  getProjectAC,
  getProjectFailureAC,
  getProjectsAC,
  getProjectsFailureAC,
  getProjectsSuccessAC,
  getProjectSuccessAC,
  updateProjectFailureAC,
  updateProjectSuccessAC,
} from '../actionCreators/projects';

import { projectsAPI } from '../services/projects';

import { getItemFromLocalStorage } from '../utils/localStorage';
import { apiResponseErrorDataConverter, getAuthStatusError } from '../utils/errorHandling';

function* getProjects({ payload }) {
  try {
    yield put(loadingPendingAC());

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthStatusError();
    }

    const data = yield call(projectsAPI.getProjects, token, payload);

    yield put(getProjectsSuccessAC(data));

    yield put(loadingSuccessAC());
  } catch (error) {
    yield put(getProjectsFailureAC(error.message));

    yield put(loadingSuccessAC());
    yield put(handleShowNotificationModalAC());
  }
}

function* createNewProject({ payload }) {
  try {
    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthStatusError();
    }

    yield call(projectsAPI.createNewProject, token, payload);
    yield put(createNewProjectSuccessAC());

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
      yield getAuthStatusError();
    }

    yield call(projectsAPI.deleteProject, token, payload);
    yield put(deleteProjectSuccessAC());

    yield put(getProjectsAC());
  } catch ({ response: { data } }) {
    const errorMessage = yield apiResponseErrorDataConverter(data);

    yield put(deleteProjectFailureAC(errorMessage));
    yield put(handleShowNotificationModalAC());
  }
}

function* getProject({ payload }) {
  try {
    yield put(loadingPendingAC());

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthStatusError();
    }

    const data = yield call(projectsAPI.getProject, token, payload);

    yield put(getProjectSuccessAC(data));
    yield put(loadingSuccessAC());
  } catch ({ response: { data } }) {
    const errorMessage = yield apiResponseErrorDataConverter(data);

    yield put(getProjectFailureAC(errorMessage));
    yield put(loadingSuccessAC());
    yield put(handleShowNotificationModalAC());
  }
}

function* updateProject({ payload }) {
  try {
    const { id, title, description } = payload;

    yield put(loadingPendingAC());

    const token = yield call(getItemFromLocalStorage, KEY_NAMES.AUTH_TOKEN);

    if (!token) {
      yield getAuthStatusError();
    }

    yield call(projectsAPI.updateProject, token, id, { title, description });
    yield put(updateProjectSuccessAC());

    yield put(getProjectAC(id));
  } catch (error) {
    yield put(updateProjectFailureAC(error.message));

    yield put(loadingSuccessAC());
    yield put(handleShowNotificationModalAC());
  }
}

export function projectSaga() {
  return all([
    takeEvery(GET_PROJECTS_PENDING, getProjects),
    takeEvery(CREATE_NEW_PROJECT_PENDING, createNewProject),
    takeEvery(DELETE_PROJECT_PENDING, deleteProject),
    takeEvery(GET_PROJECT_PENDING, getProject),
    takeEvery(UPDATE_PROJECT_PENDING, updateProject),
  ]);
}
