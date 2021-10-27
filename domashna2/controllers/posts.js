const Post = require('../models/post');

module.exports = {
  all: async (req, res) => {
    try {
      const posts = await Post.find().populate('user');

      res.send({
        error: false,
        message: 'Get all posts from database',
        posts: posts
      })
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  },
  getByUser: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.params.id })

      res.send({
        error: false,
        message: `Get all posts for user with id #${req.params.id}`,
        posts: posts
      })
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  },
  create: async (req, res) => {
    try {
      const post = await Post.create(req.body);

      res.send({
        error: false,
        message: `User with id #${ req.body.user } has just created a new post!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  },
  delete: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);

      res.send({
        error: false,
        message: `User with id #${req.body.user} has been deleted!`
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg,
      })
    }

  }
}