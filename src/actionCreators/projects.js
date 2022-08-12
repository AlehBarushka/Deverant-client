import {
  CREATE_NEW_PROJECT_FAILURE,
  CREATE_NEW_PROJECT_PENDING,
  CREATE_NEW_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_PENDING,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_PENDING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_PENDING,
  GET_PROJECT_SUCCESS,
} from '../actions';

export const getProjectsAC = offset => ({
  type: GET_PROJECTS_PENDING,
  payload: offset,
});

export const getProjectsSuccessAC = projectsData => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projectsData,
});

export const getProjectsFailureAC = error => ({
  type: GET_PROJECTS_FAILURE,
  payload: error,
});

export const createNewProjectAC = projectData => ({
  type: CREATE_NEW_PROJECT_PENDING,
  payload: projectData,
});

export const createNewProjectSuccessAC = () => ({
  type: CREATE_NEW_PROJECT_SUCCESS,
});

export const createNewProjectFailureAC = error => ({
  type: CREATE_NEW_PROJECT_FAILURE,
  payload: error,
});

export const deleteProjectAC = id => ({
  type: DELETE_PROJECT_PENDING,
  payload: id,
});

export const deleteProjectSuccessAC = () => ({
  type: DELETE_PROJECT_SUCCESS,
});

export const deleteProjectFailureAC = error => ({
  type: DELETE_PROJECT_FAILURE,
  payload: error,
});

export const getProjectAC = id => ({
  type: GET_PROJECT_PENDING,
  payload: id,
});

export const getProjectSuccessAC = projectData => ({
  type: GET_PROJECT_SUCCESS,
  payload: projectData,
});

export const getProjectFailureAC = error => ({
  type: GET_PROJECT_FAILURE,
  payload: error,
});
