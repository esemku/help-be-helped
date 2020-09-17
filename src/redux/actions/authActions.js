import {
    REGISTER_USER,
    ACTIVATE_USER,
    LOGIN,
    FORGET_PASSWORD
} from '../constants/authConstants'


export const registerUser = ({ name, email, password }) => ({
  type: REGISTER_USER,
  name,
  email,
  password
})

export const activateUser = ({ token }) => ({ type: ACTIVATE_USER, token })

export const login = ({ email, password }) => ({
  type: LOGIN,
  email,
  password
})

export const forgetPassword = ({ email }) => ({ type: FORGET_PASSWORD, email })

// export const logout = () => ({
//   type: LOGOUT
// })
