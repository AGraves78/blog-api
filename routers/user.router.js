const express = require('express');
const router = express.Router();

router.get('/users', (req, res) =>{
  res.send('getting all dem users!!');
});
router.get('/users/:userId', (req, res) =>{
  res.send('getting that one special someone!');
});
router.post('/user', (req, res) =>{
  res.send('creating that new user you requested');
});
router.put('/user/:userId', (req, res) =>{
  res.send('updates errrrywhere!');
});
router.delete('/user/:userId', (req, res) =>{
  res.send('burning it down!');
});

module.exports = router;
