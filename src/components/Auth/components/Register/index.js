import React from 'react'
// import styles from './Register.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'


const Register = props => {
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
      			<h1 className='form__h1'>Sign Up</h1>
      			<p className='form__p'>Enter your details to create your account</p>
      		</div>
      		<div className='form__inputs-wrapper'>
      			<input
              type='text'
              className='form__input'
              placeholder='Fullname'
              onBlur={handleBlur}
              onChange={handleChange}
            />
      			<input
              type='text'
              className='form__input'
              placeholder='Email'
            />
            <input
              type='text'
              className='form__input'
              placeholder='Password'
            />
            <input
              type='text'
              className='form__input'
              placeholder='Confirm password'
            />
          </div>
          <div className='form__checkbox-wrapper'>
            <label className='checkbox-label'>
              <input name='acceptTerms' type='checkbox' className='checkbox' />
              I Agree the
              <NavLink to='' target="_blank" > terms and conditions</NavLink>
            </label>
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


export default Register
