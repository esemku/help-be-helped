import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../helpers/auth'
import { useStyles } from './styles'

import ProfileIcon from './ProfileIcon'


const Header = ({ user }) => {
  const classes = useStyles()

  const handleSignOut = () => {
    signOut()
    window.location.reload(false)
  }


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div></div>
        <div classname={classes.iconsWrapper}>
          <ProfileIcon signOut={handleSignOut} user={user} />
        </div>
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
