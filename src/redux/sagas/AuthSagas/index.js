import { registerUserWatcher } from './registerUserSaga'
import { activateUserWatcher } from './activateUserSaga'
import { loginWatcher } from './loginSaga'


export default [
  registerUserWatcher(), activateUserWatcher(), loginWatcher()
]
