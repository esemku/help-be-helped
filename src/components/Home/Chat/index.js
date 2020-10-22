import React from 'react'
import { useStyles } from './styles'

import User from './User'
import MessageBox from './MessageBox'
import SearchIcon from '../../../media/icons/svg/SearchIcon'


const Chat = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <div className={classes.usersWrapper}>
        <div className={classes.searchBarWrapper}>
          <div className={classes.searchIcon}><SearchIcon /></div>
          <input type="text" className={classes.input} placeholder='Username'/>
        </div>

        <div>
          <User />
        </div>
      </div>

      <div>
        <MessageBox />
      </div>

    </div>
  )
}


export default Chat
