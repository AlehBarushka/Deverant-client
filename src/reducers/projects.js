import {
  CREATE_NEW_PROJECT_FAILURE,
  CREATE_NEW_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions';

const initialState = {
  total: null,
  projects: [],
  error: null,
};

const projectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: payload.projects, total: payload.total_count, error: null };

    case GET_PROJECTS_FAILURE:
      return { ...state, error: payload };

    case CREATE_NEW_PROJECT_SUCCESS:
    case DELETE_PROJECT_SUCCESS:
      return { ...state, error: null };

    case CREATE_NEW_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
      return { ...state, error: payload };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default projectsReducer;
