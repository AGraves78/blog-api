const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    required: true,
    type: Schema.objectId
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
