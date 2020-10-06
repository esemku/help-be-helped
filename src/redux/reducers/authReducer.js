import * as authConstants from '../constants/authConstants'

const initialState = {
  status: null,
  status_type: null,
  error: null,
  error_type: null,
  isAuthorized: false,
  auth: {
    token: '',
    user: {}
  }
}


export default function(state = initialState, action) {
  switch (action.type) {
    case authConstants.SET_AUTH: {
      return {
        ...state,
        auth: action.msg,
        isAuthorized: true
      }
    }
    case authConstants.STATUS: {
      return {
        ...state,
        status: action.msg,
        status_type: action.req
      }
    }
    case authConstants.CLEAR_STATUS: {
      return {
        ...state,
        status: null,
        status_type: null
      }
    }
    case authConstants.ERROR: {
      return {
        ...state,
        error: action.msg,
        error_type: action.req
      }
    }
    case authConstants.CLEAR_ERROR: {
      return {
        ...state,
        error: null,
        error_type: null
      }
    }
    default: {
      return state
    }
  }
}
