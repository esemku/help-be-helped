import React from 'react'
import { useStyles } from './styles'


const ProfileIcon = ({ signOut, user }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} onClick={() => signOut()}>
      <div style={{ padding: '0 .4rem' }}>
        <div className={classes.signout}>
          Hi,&nbsp;<span className={classes.hiSpan}>{user.name}</span>
          <div className={classes.letterDiv}>
            {user.name && user.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProfileIcon
