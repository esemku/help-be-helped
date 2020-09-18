import { put, takeLatest, select } from 'redux-saga/effects'
import {
  RESET_PASSWORD,
  ERROR,
  CLEAR_ERROR
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchResetPassword({ password, token }) {
  try {
    const response = yield API_AUTH.put(apiEndpoint.RESET_PASSWORD, {
      newPassword: password,
      resetPasswordLink: token
    })
    console.log('saga: ', response);
  } catch (err) {
    console.log(err)
  }
}


export function* resetPasswordWatcher() {
  yield takeLatest(RESET_PASSWORD, fetchResetPassword)
}


export default [resetPasswordWatcher()]
