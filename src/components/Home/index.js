import React, { useEffect, useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import { useStyles } from './styles'
import { connect } from 'react-redux'
import { isAuth, getCookie } from '../../helpers/auth'
import { setLogged } from '../../redux/actions/authActions'

import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'
import WantToHelp from './WantToHelp'
import NeedHelp from './NeedHelp'
import Chat from './Chat'


const Home = ({ setLogged }) => {
  const classes = useStyles()

  const [authData, setAuthData] = useState({})

  useEffect(() => {
    const { token } = getCookie()
    const auth = isAuth()
    setAuthData({ token, user: auth })
  },[])

  useEffect(() => {
    const { token, user } = authData;
    if(token && user) {
      setLogged({ authData })
    }
  },[authData])


  return (
    <div className={classes.root}>
      <SideNav />
      <div className={classes.container}>
        <Header />
        <main className={classes.content}>
          <Switch>
            <Route path='/want-to-help' component={WantToHelp} />
            <Route path='/need-help' component={NeedHelp} />
            <Route path='/chat' component={Chat} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setLogged
}

export default connect(null, mapDispatchToProps)(Home);
