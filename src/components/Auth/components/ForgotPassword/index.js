import React from 'react'
// import styles from './ForgotPassword.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'


const ForgotPassword = props => {
  return (
    <Formik
      initialValues=''
      validate={values => {
        const errors = {}

        return errors
      }}
      enableReinitialize={true}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate={true} autoComplete='off' className='form'>
      		<div className='form__header'>
      			<h1 className='form__h1'>Forgotten Password ?</h1>
      			<p className='form__p'>Enter your email to reset your password</p>
      		</div>
      		<div className='form__inputs-wrapper'>
      			<input
              type='text'
              className='form__input'
              placeholder='Email'
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div className='form__btn-wrapper--primary'>
            <NavLink to=''>
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


export default ForgotPassword
