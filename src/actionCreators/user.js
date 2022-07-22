import { SET_USER } from '../actions';

export const setUserAC = payload => ({
  type: SET_USER,
  payload: payload,
});
