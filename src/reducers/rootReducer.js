import { combineReducers } from 'redux';

import aplicationReducer from './application';
import authReducer from './auth';
import projectsReducer from './projects';
import userReducer from './user';

const rootReducer = combineReducers({
  application: aplicationReducer,
  auth: authReducer,
  user: userReducer,
  projectsData: projectsReducer,
});

export default rootReducer;
