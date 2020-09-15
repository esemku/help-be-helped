import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'
import { withLayout } from './Auth/HOC/withLayout'


const AuthWithLayout = withLayout(Auth)


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/error" component={ErrorPage} /> */}
        {/* <Route exact path="/logout" component={Logout} /> */}
        <Route path='/auth' component={AuthWithLayout} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
