import React, { useState } from 'react'
import styles from './Login.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { login } from '../../../../redux/actions/authActions'


const Login = ({ login }) => {

  const [userData, serUserData] = useState({
    email: '',
    password: ''
  })

  const handleFormikSubmit = (e, email, password) => {
    e.preventDefault()
    login({ email, password })
  }


  return (
    <Formik
      initialValues={userData}
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
      			<p className='form__p'>Enter your email and password</p>
      		</div>
      		<div className='form__inputs-wrapper'>
      			<input
              name='email'
              type='email'
              className='form__input'
              placeholder='Email'
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
      			<input
              name='password'
              type='password'
              className='form__input'
              placeholder='Password'
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
        		<div className='login__forgot-pass'>
              <NavLink to='/auth/forgot-password'>
                <a href=''>Forgot Password ?</a>
              </NavLink>
              <NavLink
                to=''
                onClick={(e) => handleFormikSubmit(e, values.email, values.password)}
              >
                <button type='submit' className='form__btn form__btn--submit'>
                  Sign In
                </button>
              </NavLink>
        		</div>
          </div>
        </form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = {
  login
}


export default connect(null, mapDispatchToProps)(Login)
