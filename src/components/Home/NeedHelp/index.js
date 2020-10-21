import React, { useEffect } from 'react'
import io from 'socket.io-client'


const NeedHelp = () => {

  const socket = io('http://localhost:7000')

  useEffect(() => {
    console.log('socket: ', socket);
    socket.on('chat-message', data => {
      console.log('data: ', data);
    })
  },[socket])


  return (
    <div>
      NeedHelp!!!
    </div>
  )
}


export default NeedHelp
