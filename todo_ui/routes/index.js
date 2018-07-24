var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  if (!req.session.user_signed_in == true) {
    res.redirect('/user/signin')
    return;  
  }

  res.redirect('/task/dashboard')
  return;  
});

module.exports = router;
