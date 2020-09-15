import { registerUserWatcher } from './registerUserSaga'
import { activateUserWatcher } from './activateUserSaga'


export default [
  registerUserWatcher(), activateUserWatcher()
]
