const mongoose = require('mongoose')

// post schema
const postScheama = new mongoose.Schema(
  {
    owner: { type: String, required: true },
    nick: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
  }
)


module.exports = mongoose.model('Post', postScheama)
