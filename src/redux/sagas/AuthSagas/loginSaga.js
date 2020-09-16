import { put, takeLatest, select } from 'redux-saga/effects'
import {
  LOGIN,
  ERROR,
  CLEAR_ERROR
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchLogin({ email, password }) {
  try {
    const response = yield API_AUTH.post(apiEndpoint.LOGIN, {
      email, password
    })
    console.log('saga: ', response);
  } catch (err) {
    console.log(err)
  }
}


export function* loginWatcher() {
  yield takeLatest(LOGIN, fetchLogin)
}


export default [loginWatcher()]
