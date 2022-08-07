import {
  HANDLE_CLOSE_ACTION_MODAL,
  HANDLE_CLOSE_NOTIFICATION_MODAL,
  HANDLE_SHOW_ACTION_MODAL,
  HANDLE_SHOW_NOTIFICATION_MODAL,
  LOADING_PENDING,
  LOADING_SUCCESS,
} from '../actions';

const initialState = {
  isLoading: false,
  isNotificationModalShowing: false,
  isModalActionModalShowing: false,
};

const aplicationReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOADING_PENDING: {
      return { ...state, isLoading: true };
    }

    case LOADING_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case HANDLE_SHOW_NOTIFICATION_MODAL: {
      return { ...state, isNotificationModalShowing: true };
    }

    case HANDLE_SHOW_ACTION_MODAL:
      return { ...state, isModalActionModalShowing: true };

    case HANDLE_CLOSE_NOTIFICATION_MODAL: {
      return { ...state, isNotificationModalShowing: false };
    }

    case HANDLE_CLOSE_ACTION_MODAL: {
      return { ...state, isModalActionModalShowing: false };
    }

    default:
      return state;
  }
};

export default aplicationReducer;
