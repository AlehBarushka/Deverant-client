import { GET_LOADING_PENDING, GET_LOADING_SUCCESS } from '../actions';

const initialState = {
  isLoading: false,
};

const aplicationReducer = (state = initialState, { type }) => {
  switch (type) {
    case GET_LOADING_SUCCESS: {
      return { ...state, isLoading: true };
    }

    case GET_LOADING_PENDING: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default aplicationReducer;
