import {
  CREATE_NEW_PROJECT_FAILURE,
  CREATE_NEW_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_SUCCESS,
} from '../actions';

const initialState = {
  total: null,
  projects: [],
  currentProject: {},
  error: null,
};

const projectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS_SUCCESS:
      return { ...initialState, projects: payload.projects, total: payload.total_count };

    case GET_PROJECT_SUCCESS:
      return { ...state, currentProject: payload };

    case GET_PROJECTS_FAILURE:
    case GET_PROJECT_FAILURE:
      return { ...initialState, error: payload };

    case CREATE_NEW_PROJECT_SUCCESS:
    case UPDATE_PROJECT_SUCCESS:
    case DELETE_PROJECT_SUCCESS:
      return { ...state, error: null };

    case CREATE_NEW_PROJECT_FAILURE:
    case UPDATE_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
      return { ...state, error: payload };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default projectsReducer;
