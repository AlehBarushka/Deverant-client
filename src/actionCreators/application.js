import { LOADING_PENDING, LOADING_SUCCESS } from '../actions';

export const loadingPendingAC = () => ({
  type: LOADING_PENDING,
});

export const loadingSuccessAC = () => ({
  type: LOADING_SUCCESS,
});
