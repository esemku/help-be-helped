import { all } from 'redux-saga/effects'
import authSaga from './AuthSagas/index'

export default function* rootSaga() {
  yield all([
    ...authSaga
  ])
}
