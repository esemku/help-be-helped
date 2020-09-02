import { all } from 'redux-saga/effects'
import globalSaga from './GlobalSagas/index'

export default function* rootSaga() {
  yield all([
    ...globalSaga
  ])
}
