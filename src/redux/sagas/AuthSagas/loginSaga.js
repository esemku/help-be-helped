import { put, takeLatest, select } from 'redux-saga/effects'
import {
  LOGIN,
  STATUS,
  CLEAR_STATUS,
  ERROR,
  CLEAR_ERROR,
  SET_AUTH
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchLogin({ email, password }) {
  yield put({ type: CLEAR_ERROR })
  yield put({ type: CLEAR_STATUS })
  try {
    const response = yield API_AUTH.post(apiEndpoint.LOGIN, {
      email, password
    })
    yield put({ type: STATUS, msg: response.status, req: 'LOGIN' })
    yield put({ type: SET_AUTH, msg: response.data })
  } catch (err) {
    console.log(err.response)
    yield put({ type: ERROR, msg: err.response.data.errors, req: 'LOGIN' })
  }
  yield put({ type: CLEAR_ERROR })
  yield put({ type: CLEAR_STATUS })
}


export function* loginWatcher() {
  yield takeLatest(LOGIN, fetchLogin)
}


export default [loginWatcher()]
