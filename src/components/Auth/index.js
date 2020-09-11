import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'


export const Auth = () => (
  <Switch>
    {/* <Route path="/auth/change-password" component={ChangePassword} />
    <Route path="/auth/new-password" component={NewPassword} />
    <Route path="/auth/mfa" component={Mfa} /> */}
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />
    <Route path="/auth/forgot-password" component={ForgotPassword} />
    <Redirect exact from="/auth" to="/auth/login" />
    <Redirect to="/auth/login" />
  </Switch>
)

export default Auth
