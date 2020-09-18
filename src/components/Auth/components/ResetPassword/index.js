import React, { useState, useEffect } from 'react'
// import styles from './ResetPassword.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { resetPassword } from '../../../../redux/actions/authActions'


const ResetPassword = ({ match, resetPassword }) => {

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    token: ''
  })


  useEffect(() => {
    let token = match.params.token
    if(token) {
      setFormData({ ...formData, token })
    }
  }, [])

  const handleFormikSubmit = (e, password) => {
    e.preventDefault()
    resetPassword({ password, token })
  }

  const { token } = formData


  return (
    <Formik
      initialValues={formData}
      validate={values => {
        const errors = {}

        return errors
      }}
      enableReinitialize={true}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate={true} autoComplete='off' className='form'>
      		<div className='form__header'>
      			<h1 className='form__h1'>Reset Your Password</h1>
      		</div>
      		<div className='form__inputs-wrapper'>
            <input
              name='password'
              type='password'
              className='form__input'
              placeholder='Password'
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <input
              name='confirmPassword'
              type='password'
              className='form__input'
              placeholder='Confirm password'
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div className='form__btn-wrapper--primary'>
            <NavLink
              onClick={(e) => handleFormikSubmit(e, values.confirmPassword)}
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

const mapDispatchToProps = {
  resetPassword
}

export default connect(null, mapDispatchToProps)(ResetPassword)
