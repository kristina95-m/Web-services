const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  category:{
    type:mongoose.Types.ObjectId,
    ref: 'category'
  }
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema)