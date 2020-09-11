import React from 'react';
import styles from './Login.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'


const Login = props => {
  return (
    <div className='login'>
  		<div className='login__header'>
  			<h1>Sign In</h1>
  			<p>Enter your username and password</p>
  		</div>
  		<form className='login__form'>
  			<input type='text'/>
  			<input type='text'/>
    		<div className='login__forgot-pass'>
          <NavLink to='/auth/forgot-password'>
            <a href=''>Forgot Password ?</a>
          </NavLink>
          <button type='submit'>Sign In</button>
    		</div>
      </form>
    </div>
  )
}


export default Login
