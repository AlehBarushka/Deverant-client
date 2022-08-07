import {
  HANDLE_CLOSE_ACTION_MODAL,
  HANDLE_CLOSE_NOTIFICATION_MODAL,
  HANDLE_SHOW_ACTION_MODAL,
  HANDLE_SHOW_NOTIFICATION_MODAL,
  LOADING_PENDING,
  LOADING_SUCCESS,
} from '../actions';

export const loadingPendingAC = () => ({
  type: LOADING_PENDING,
});

export const loadingSuccessAC = () => ({
  type: LOADING_SUCCESS,
});

export const handleShowNotificationModalAC = () => ({
  type: HANDLE_SHOW_NOTIFICATION_MODAL,
});

export const handleCloseNotificationModalAC = () => ({
  type: HANDLE_CLOSE_NOTIFICATION_MODAL,
});

export const handleShowActionModalAC = () => ({
  type: HANDLE_SHOW_ACTION_MODAL,
});

export const handleCloseActionModalAC = () => ({
  type: HANDLE_CLOSE_ACTION_MODAL,
});
