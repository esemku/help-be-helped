import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import jwt from 'jsonwebtoken'
import { connect } from 'react-redux'
import { activateUser } from '../../../../redux/actions/authActions'


const Activate = ({ match, activateUser }) => {

  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  })

  useEffect(() => {
    let token = match.params.token
    let { name } = jwt.decode(token)

    if(token) {
      setFormData({ ...formData, name, token })
    }
  }, [match.params])

  const handleFormikSubmit = (e) => {
    e.preventDefault()
    activateUser({ token })
  }

  const { name, token } = formData

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
      			<h1 className='form__h1'>Welcome {name}</h1>
      		</div>
      		<div className='form__inputs-wrapper'>
            <NavLink to='' onClick={(e) => handleFormikSubmit(e)}>
              <button
                type='submit'
                className='form__btn form__btn--submit form__btn--long'
              >
                Activate your Account
              </button>
            </NavLink>
          </div>
        </form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = {
  activateUser
}

export default connect(null, mapDispatchToProps)(Activate)
