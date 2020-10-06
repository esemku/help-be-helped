import React, { useState, useEffect } from 'react'
import styles from './Login.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { login } from '../../../../redux/actions/authActions'
import { authenticate } from '../../../../helpers/auth'

import ErrorAlert from '../../../shared/ErrorAlert'
import OutlineInfoIcon from '../../../../media/icons/svg/OutlineInfoIcon'
import CheckIcon from '../../../../media/icons/svg/CheckIcon'


const Login = ({ login, status, status_type, error, error_type, auth, history, intl }) => {

  const [userData, serUserData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorAlertContent, setErrorAlertContent] = useState('')

  const handleFormikSubmit = (e, email, password) => {
    e.preventDefault()
    setShowErrorAlert(false)
    setLoading(true)
    login({ email, password })
  }

  useEffect(() => {
    if(status === 200 && status_type === 'LOGIN') {
      setLoading(false)
      authenticate(auth.token, auth.user)
      history.push('/')
    }
  },[auth])

  useEffect(() => {
    setLoading(false)
    if(error_type === 'LOGIN') {
      setShowErrorAlert(true)
      setErrorAlertContent(error)
    }
  },[error])

  useEffect(() => {
    console.log('intl: ', intl);
  },[intl])

  return (
    <Formik
      initialValues={userData}
      validate={values => {
        const errors = {}

        if (!values.email) {
          errors.email = 'Required field'
        }

        if (!values.password) {
          errors.password = 'Required field'
        }
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
          {showErrorAlert && <ErrorAlert content={errorAlertContent}/>}
      		<div className='form__inputs-wrapper'>
            <div className='form__input-wrapper'>
              <input
                name='email'
                type='email'
                className='form__input form__input--error'
                placeholder='Email'
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
                <div className='form__icon-wrapper'>
                  {errors.email && <OutlineInfoIcon />}
                  {touched.email && !errors.email && <CheckIcon />}
                </div>
              {errors.email && <div className='form__input-msg'>{errors.email}</div>}
            </div>
      			<div className='form__input-wrapper'>
              <input
                name='password'
                type='password'
                className='form__input'
                placeholder='Password'
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className='form__icon-wrapper'>
                {errors.password && <OutlineInfoIcon />}
                {touched.password && !errors.password && <CheckIcon />}
              </div>
              <div className='form__input-msg'>{errors.password}</div>
            </div>
        		<div className='login__forgot-pass'>
              <NavLink to='/auth/users/forget'>
                <a href=''>Forgot Password ?</a>
              </NavLink>
              <button
                type='submit'
                className={`form__btn form__btn--submit ${loading && 'spinner spinner-white spinner-right'}`}
                onClick={(e) => handleFormikSubmit(e, values.email, values.password)}
              >
                Sign In
              </button>
        		</div>
          </div>
        </form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => {
  return {
    status: state.auth.status,
    status_type: state.auth.status_type,
    error: state.auth.error,
    error_type: state.auth.error_type,
    auth: state.auth.auth
  }
}

const mapDispatchToProps = {
  login
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
