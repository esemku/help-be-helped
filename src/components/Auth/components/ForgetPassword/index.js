import React, { useEffect, useState } from 'react'
// import styles from './ForgetPassword.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { forgetPassword } from '../../../../redux/actions/authActions'


const ForgetPassword = ({ forgetPassword }) => {

  const [userData, setUserData] = useState({
    email: ''
  })

  const handleFormikSubmit = (e, email) => {
    e.preventDefault()
    forgetPassword({ email })
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
      			<h1 className='form__h1'>Forgotten Password ?</h1>
      			<p className='form__p'>Enter your email to reset your password</p>
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
          </div>
          <div className='form__btn-wrapper--primary'>
            <NavLink onClick={(e) => handleFormikSubmit(e, values.email)}>
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
  forgetPassword
}


export default connect(null, mapDispatchToProps)(ForgetPassword)
