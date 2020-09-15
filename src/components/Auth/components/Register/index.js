import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { registerUser } from '../../../../redux/actions/authActions'


const Register = ({ registerUser }) => {

  const [userData, serUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleFormikSubmit = (e, name, email, password) => {
    e.preventDefault()
    registerUser({ name, email, password })
  }


  return (
    <Formik
      initialValues={userData}
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
              name='name'
              type='text'
              className='form__input'
              placeholder='Name'
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
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

const mapDispatchToProps = {
  registerUser
}

export default connect(null, mapDispatchToProps)(Register)
