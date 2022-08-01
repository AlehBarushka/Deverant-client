import {
  HANDLE_CLOSE_MODAL,
  HANDLE_SHOW_MODAL,
  LOADING_PENDING,
  LOADING_SUCCESS,
} from '../actions';

const initialState = {
  isLoading: false,
  isModalShowing: false,
};

const aplicationReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOADING_PENDING: {
      return { ...state, isLoading: true };
    }

    case LOADING_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case HANDLE_SHOW_MODAL: {
      return { ...state, isModalShowing: true };
    }

    case HANDLE_CLOSE_MODAL: {
      return { ...state, isModalShowing: false };
    }

    default:
      return state;
  }
};

export default aplicationReducer;
