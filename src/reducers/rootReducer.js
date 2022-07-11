import { combineReducers } from 'redux';

import aplicationReducer from './application';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  application: aplicationReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
