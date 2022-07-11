import { LOADING_PENDING, LOADING_SUCCESS } from '../actions';

const initialState = {
  isLoading: false,
};

const aplicationReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOADING_PENDING: {
      return { ...state, isLoading: true };
    }

    case LOADING_SUCCESS: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default aplicationReducer;
