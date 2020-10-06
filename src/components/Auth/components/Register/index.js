import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { registerUser } from '../../../../redux/actions/authActions'

import ErrorAlert from '../../../shared/ErrorAlert'
import OutlineInfoIcon from '../../../../media/icons/svg/OutlineInfoIcon'
import CheckIcon from '../../../../media/icons/svg/CheckIcon'


const Register = ({ registerUser, status, status_type, error, error_type }) => {

  const [loading, setLoading] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorAlertContent, setErrorAlertContent] = useState('')

  const [userData, serUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleFormikSubmit = (e, name, email, password) => {
    e.preventDefault()
    setShowErrorAlert(false)
    setLoading(true)
    registerUser({ name, email, password })
  }

  useEffect(() => {
    if(status === 200 && status_type === 'REGISTER') {
      setLoading(false)
    }
  },[status])

  useEffect(() => {
    setLoading(false)
    if(error_type === 'REGISTER') {
      setShowErrorAlert(true)
      setErrorAlertContent(error)
    }
  },[error])


  return (
    <Formik
      initialValues={userData}
      validate={values => {
        const errors = {}

        if (!values.name) {
          errors.name = 'Required field'
        }

        if (!values.email) {
          errors.email = 'Required field'
        }

        if (!values.password) {
          errors.password = 'Required field'
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = 'Required field'
        }

        return errors
      }}
      enableReinitialize={true}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate={true} autoComplete='off' className='form'>
      		<div className='form__header'>
      			<h1 className='form__h1'>Sign Up</h1>
      			<p className='form__p'>Enter your details to create your account</p>
      		</div>
          {showErrorAlert && <ErrorAlert content={errorAlertContent}/>}
      		<div className='form__inputs-wrapper'>
            <div className='form__input-wrapper'>
        			<input
                name='name'
                type='text'
                className='form__input'
                placeholder='Name'
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className='form__icon-wrapper'>
                {errors.name && <OutlineInfoIcon />}
                {touched.name && !errors.name && <CheckIcon />}
              </div>
              {errors.name && <div className='form__input-msg'>{errors.name}</div>}
            </div>
            <div className='form__input-wrapper'>
        			<input
                name='email'
                type='email'
                className='form__input'
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
              {errors.password && <div className='form__input-msg'>{errors.password}</div>}
            </div>
            <div className='form__input-wrapper'>
              <input
                name='confirmPassword'
                type='password'
                className='form__input'
                placeholder='Confirm password'
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className='form__icon-wrapper'>
                {errors.confirmPassword && <OutlineInfoIcon />}
                {touched.confirmPassword && !errors.confirmPassword && <CheckIcon />}
              </div>
              {errors.confirmPassword && <div className='form__input-msg'>{errors.confirmPassword}</div>}
            </div>
          </div>
          <div className='form__checkbox-wrapper'>
            <label className='checkbox-label'>
              <input name='acceptTerms' type='checkbox' className='checkbox' />
              I Agree the
              <NavLink to='' target="_blank" > terms and conditions</NavLink>
            </label>
          </div>
          <div className='form__btn-wrapper--primary'>
            <NavLink
              to=''
              onClick={(e) => handleFormikSubmit(
                e,
                values.name,
                values.email,
                values.confirmPassword
              )}
            >
              <button type='submit' className='form__btn form__btn--submit'>
                Submit
              </button>
            </NavLink>
            <NavLink to='/auth/login'>
              <button className='form__btn form__btn--cancel'>Cancel</button>
            </NavLink>
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
    error_type: state.auth.error_type
  }
}

const mapDispatchToProps = {
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
