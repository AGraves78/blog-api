const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/posts', (req, res) =>{
  Post.find({}, function(err, post){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      posts: posts
    });
  });
});
router.get('/posts/:postId', (req, res) =>{
  res.send('getting that one special post!');
});
router.post('/posts', (req, res) =>{
  const post = new Post(req.body);
  post.save(function(err, post){
    if(err) return res.status(500).json({err: err});
    return res.staus(201).json({
      msg: 'Successfully created a new post'
    })
  });
});
router.put('/posts/:postId', (req, res) =>{
  res.send('updates errrrywhere!');
});
router.delete('/posts/:postId', (req, res) =>{
  res.send('burning it down!');
});

module.exports = router;
