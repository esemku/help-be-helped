import React, { useEffect, useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import styles from './Home.scss'
import { connect } from 'react-redux'
import { isAuth, getCookie } from '../../helpers/auth'
import { setLogged } from '../../redux/actions/authActions'

import Header from './Header'
import SideNav from './SideNav'
import WantToHelp from './WantToHelp'
import NeedHelp from './NeedHelp'


const Home = ({ setLogged }) => {

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
    <div className='home'>
      <SideNav />
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/want-to-help' component={WantToHelp} />
          <Route path='/need-help' component={NeedHelp} />
        </Switch>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setLogged
}

export default connect(null, mapDispatchToProps)(Home);
