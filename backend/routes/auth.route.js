const express = require('express')
const router = express.Router()

// Validation
const {
  validSign,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator
} = require('../helpers/valid')

// Load Controllers
const {
  registerController,
  activationController,
  signinController
} = require('../controllers/auth.controller')

router.post('/register', validSign, registerController)
router.post('/login', validLogin, signinController)
router.post('/activation', activationController)

module.exports = router
