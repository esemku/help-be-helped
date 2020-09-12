import React from 'react'
import styles from './Login.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'


const Login = props => {
  return (
    <Formik
      initialValues=''
      validate={values => {
        const errors = {}

        // if (!values.fullName) {
        //   errors.fullName = intl.formatMessage({ id: 'AUTH.VALIDATION.REQUIRED_FIELD' })
        // }
        // if (!values.team) {
        //   errors.team = intl.formatMessage({ id: 'AUTH.VALIDATION.REQUIRED_FIELD' })
        // }
        // if (!values.company) {
        //   errors.company = intl.formatMessage({ id: 'AUTH.VALIDATION.REQUIRED_FIELD' })
        // }
        // if (!values.phoneNumber) {
        //   errors.phoneNumber = intl.formatMessage({ id: 'AUTH.VALIDATION.REQUIRED_FIELD' })
        // }
        // if (!values.email) {
        //   errors.email = intl.formatMessage({ id: 'AUTH.VALIDATION.REQUIRED_FIELD' })
        // }

        return errors
      }}
      enableReinitialize={true}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate={true} autoComplete='off' className='form'>
      		<div className='form__header'>
      			<h1 className='form__h1'>Sign In</h1>
      			<p className='form__p'>Enter your username and password</p>
      		</div>
      		<div className='form__inputs-wrapper'>
      			<input
              type='text'
              className='form__input'
              placeholder='Username'
              onBlur={handleBlur}
              onChange={handleChange}
            />
      			<input
              type='text'
              className='form__input'
              placeholder='Password'
            />
        		<div className='login__forgot-pass'>
              <NavLink to='/auth/forgot-password'>
                <a href=''>Forgot Password ?</a>
              </NavLink>
              <button type='submit' className='form__btn form__btn--submit'>
                Sign In
              </button>
        		</div>
          </div>
        </form>
      )}
    </Formik>
  )
}


export default Login
