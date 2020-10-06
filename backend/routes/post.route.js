const express = require('express')
const router = express.Router()


// Load controllers
const {
  addPostController
} = require('../controllers/post.controller')


router.put('/need-help', addPostController)


module.exports = router
