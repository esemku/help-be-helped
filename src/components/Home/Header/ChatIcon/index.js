import React from 'react'
import { useStyles } from './styles'
import { NavLink } from 'react-router-dom'

import GroupChatIcon from '../../../../media/icons/svg/GroupChatIcon'


const ChatIcon = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavLink to='/chat'>
        <GroupChatIcon />
      </NavLink>
    </div>
  )
}


export default ChatIcon
