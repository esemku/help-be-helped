const Post = require('../models/post.model')


exports.addPostController = (req, res) => {
  const {
    owner,
    nick,
    category,
    type,
    title,
    content
  } = req.body;

  let errors = {}

  const newPost = Post({ owner, nick, category, type, title, content })
  newPost.save((err, post) => {
    if (err) {
      let errors = { 'post': err }
      res.status(500).json(errors)
    }
    res.status(200).json(post)
  })
}
