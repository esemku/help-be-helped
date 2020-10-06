import React from 'react'
import styles from './ErrorAlert.scss'


const ErrorAlert = ({ content }) => {
  return (
    <div className='error-alert'>
      <span>{content}</span>
    </div>
  )
}


export default ErrorAlert
