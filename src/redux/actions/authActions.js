import { REGISTER_USER } from '../constants/authConstants'

export const registerUser = ({ name, email, password }) => ({
  type: REGISTER_USER,
  name,
  email,
  password
})


// export const login = ({ email, password }) => ({
//   type: LOGIN,
//   email,
//   password
// })
//
// export const logout = () => ({
//   type: LOGOUT
// })
