import { put, takeLatest, select } from 'redux-saga/effects'
import {
  FORGET_PASSWORD,
  ERROR,
  CLEAR_ERROR
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchForgetPassword({ email }) {
  try {
    const response = yield API_AUTH.put(apiEndpoint.FORGET_PASSWORD, { email })
    console.log('saga: ', response);
  } catch (err) {
    console.log(err)
  }
}


export function* forgetPasswordWatcher() {
  yield takeLatest(FORGET_PASSWORD, fetchForgetPassword)
}


export default [forgetPasswordWatcher()]
