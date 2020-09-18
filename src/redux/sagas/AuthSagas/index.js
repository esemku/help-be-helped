import { registerUserWatcher } from './registerUserSaga'
import { activateUserWatcher } from './activateUserSaga'
import { loginWatcher } from './loginSaga'
import { forgetPasswordWatcher } from './forgetPasswordSaga'
import { resetPasswordWatcher } from './resetPasswordSaga'


export default [
  registerUserWatcher(),
  activateUserWatcher(),
  loginWatcher(),
  forgetPasswordWatcher(),
  resetPasswordWatcher()
]
