import { put, takeLatest, select } from 'redux-saga/effects'
import {
  REGISTER_USER,
  ERROR,
  CLEAR_ERROR,
  STATUS,
  CLEAR_STATUS
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchRegisterUser({ name, email, password }) {
  yield put({ type: CLEAR_ERROR })
  yield put({ type: CLEAR_STATUS })
  try {
    const response = yield API_AUTH.post(apiEndpoint.REGISTER, {
      name, email, password
    })
    yield put({ type: STATUS, msg: response.status, req: 'REGISTER' })
    console.log('saga: ', response);
  } catch (err) {
    console.log(err)
    yield put({ type: ERROR, msg: err.response.data.errors, req: 'REGISTER' })
  }
  yield put({ type: CLEAR_ERROR })
  yield put({ type: CLEAR_STATUS })
}


export function* registerUserWatcher() {
  yield takeLatest(REGISTER_USER, fetchRegisterUser)
}


export default [registerUserWatcher()]
