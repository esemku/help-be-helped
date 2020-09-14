import { put, takeLatest, select } from 'redux-saga/effects'
import {
  REGISTER_USER,
  ERROR,
  CLEAR_ERROR
} from '../../constants/authConstants'
// import { notSecuredAuthApi } from '../api/API'
import * as apiEndpoint from '../api/endpoints/auth'
import { API_AUTH } from '../api/API'


export function* fetchRegisterUser({ name, email, password }) {
  try {
    const response = yield API_AUTH.post(apiEndpoint.REGISTER, {
      name, email, password
    })
    console.log('saga: ', response);
  } catch (err) {
    console.log(err)
  }
}


export function* registerUserWatcher() {
  yield takeLatest(REGISTER_USER, fetchRegisterUser)
}


export default [registerUserWatcher()]
