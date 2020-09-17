import { registerUserWatcher } from './registerUserSaga'
import { activateUserWatcher } from './activateUserSaga'
import { loginWatcher } from './loginSaga'
import { forgetPasswordWatcher } from './forgetPasswordSaga'


export default [
  registerUserWatcher(),
  activateUserWatcher(),
  loginWatcher(),
  forgetPasswordWatcher()
]
