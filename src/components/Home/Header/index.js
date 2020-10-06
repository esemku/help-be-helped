import React from 'react'
import styles from './Header.scss';
import { connect } from 'react-redux';
import { signOut } from '../../../helpers/auth'


const Header = ({ user }) => {

  const handleSignOut = () => {
    signOut()
    window.location.reload(false)
  }


  return (
    <div className='header'>
      <div className='signout'>
        Hi, {user.name} <button onClick={() => handleSignOut()}>Sign Out</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.auth.user
  }
}


export default connect(mapStateToProps, null)(Header)
