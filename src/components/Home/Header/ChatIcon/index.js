import React from 'react'
import { useStyles } from './styles'

import GroupChatIcon from '../../../../media/icons/svg/GroupChatIcon'


const ChatIcon = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GroupChatIcon />
    </div>
  )
}


export default ChatIcon
