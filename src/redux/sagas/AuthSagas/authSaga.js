import { put, takeLatest } from 'redux-saga/effects'
import {
  SET_LOGGED,
  SET_AUTH
} from '../../constants/authConstants'


export function* fetchAuth({ authData }) {
  yield put({ type: SET_AUTH, msg: authData })
}


export function* authWatcher() {
  yield takeLatest(SET_LOGGED, fetchAuth)
}


export default [authWatcher()]
