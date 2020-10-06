import React, { useEffect, useState } from 'react';
import styles from './Home.scss';
import Header from './Header';
import SideNav from './SideNav';
import { connect } from 'react-redux';
import { isAuth, getCookie } from '../../helpers/auth'
import { setLogged } from '../../redux/actions/authActions'


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
        test
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setLogged
}

export default connect(null, mapDispatchToProps)(Home);
