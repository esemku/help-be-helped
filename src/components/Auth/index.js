import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ForgetPassword from './components/ForgetPassword'
import Activate from './components/Activate'
import ResetPassword from './components/ResetPassword'


export const Auth = () => (
  <Switch>
    {/* <Route path='/auth/change-password' component={ChangePassword} /> */}
    {/* <Route path='/auth/mfa' component={Mfa} /> */}
    <Route path='/auth/users/activate/:token' component={Activate} />
    <Route path='/auth/users/password/reset/:token' component={ResetPassword} />
    <Route path='/auth/login' component={Login} />
    <Route path='/auth/register' component={Register} />
    <Route path='/auth/users/forget' component={ForgetPassword} />
    <Redirect exact from='/auth' to='/auth/login' />
    {/* <Redirect to='/auth/login' /> */}
  </Switch>
)

export default Auth
