import { GET_PROJECTS_FAILURE, GET_PROJECTS_PENDING, GET_PROJECTS_SUCCESS } from '../actions';

export const getProjectsAC = () => ({
  type: GET_PROJECTS_PENDING,
});

export const getProjectsSucessAC = projectsData => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projectsData,
});

export const getProjectsFailureAC = error => ({
  type: GET_PROJECTS_FAILURE,
  payload: error,
});
