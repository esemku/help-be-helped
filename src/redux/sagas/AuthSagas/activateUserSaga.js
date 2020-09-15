import { put, takeLatest, select } from 'redux-saga/effects'
import {
  ACTIVATE_USER,
  ERROR,
  CLEAR_ERROR
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchActivateUser({ token }) {
  try {
    const response = yield API_AUTH.post(apiEndpoint.ACTIVATE, { token })
    console.log('saga: ', response);
  } catch (err) {
    console.log(err)
  }
}


export function* activateUserWatcher() {
  yield takeLatest(ACTIVATE_USER, fetchActivateUser)
}


export default [activateUserWatcher()]
