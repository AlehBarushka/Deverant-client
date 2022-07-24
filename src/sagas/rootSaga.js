import { all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { projectSaga } from './projects';

function* rootSaga() {
  yield all([authSaga(), projectSaga()]);


export default rootSaga;
