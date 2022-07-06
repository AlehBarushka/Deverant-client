import { combineReducers } from 'redux';
import aplicationReducer from './application';

const rootReducer = combineReducers({ application: aplicationReducer });

export default rootReducer;
