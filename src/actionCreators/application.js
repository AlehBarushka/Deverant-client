import {
  HANDLE_CLOSE_MODAL,
  HANDLE_SHOW_MODAL,
  LOADING_PENDING,
  LOADING_SUCCESS,
} from '../actions';

export const loadingPendingAC = () => ({
  type: LOADING_PENDING,
});

export const loadingSuccessAC = () => ({
  type: LOADING_SUCCESS,
});

export const handleShowModalAC = () => ({
  type: HANDLE_SHOW_MODAL,
});

export const handleCloseModalAC = () => ({
  type: HANDLE_CLOSE_MODAL,
});
