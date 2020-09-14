import * as authConstants from '../constants/authConstants'

export default function(state={}, action) {
  switch(action.type) {
    // case authConstants.REGISTER_USER: {
    //     return action.user
    // }
    // case authConstants.ERROR: {
    //     return action.user
    // }
    // case authConstants.CLEAR_ERROR: {
    //     return action.user
    // }
    default: {
      return state
    }
  }
}
