const express = require('express')
const router = express.Router()

// Validation
const {
  validSign,
  validLogin,
  forgetPasswordValidator,
  resetPasswordValidator
} = require('../helpers/valid')

// Load Controllers
const {
  registerController,
  activationController,
  signinController,
  forgetPasswordController,
  resetPasswordController
} = require('../controllers/auth.controller')

router.post('/register', validSign, registerController)
router.post('/login', validLogin, signinController)

router.post('/activation', activationController)

// forget | reset password
router.put('/forgetpassword', forgetPasswordValidator, forgetPasswordController)
router.put('/resetpassword', resetPasswordValidator, resetPasswordController)

module.exports = router
