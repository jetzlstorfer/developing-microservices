var express = require('express');
var router = express.Router();
var request = require('request');

var TODO_USER_SVC = process.env.TODO_USER_SVC;
var TODO_TASK_SVC = process.env.TODO_TASK_SVC;

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Todo' });
  return;
});

router.post('/register', function(req, res, next) {
  user_name = req.body.user_name;
  user_password = req.body.user_password;

  if (user_name == undefined || user_name == "undefined" || user_name == "") {
    res.redirect('/user/register');
    return;
  }

  if (user_password == undefined || user_password == "undefined" || user_password == "") {
    res.redirect('/user/register');
    return;
  }

  url = TODO_USER_SVC + "/register_user?user_name=" + user_name + "&user_password=" + user_password;

  request({
    url: url,
    json: true
  },
  function (error, response, body) {
    req.session.user_id = body;
    req.session.user_signed_in = true;

    res.redirect('/');
  });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Todo' });
  return;
});

router.post('/signin', function(req, res, next) {
  user_name = req.body.user_name;
  user_password = req.body.user_password;

  if (user_name == undefined || user_name == "undefined" || user_name == "") {
    res.redirect('/user/signin');
    return;
  }

  if (user_password == undefined || user_password == "undefined" || user_password == "") {
    res.redirect('/user/signin');
    return;
  }

  url = TODO_USER_SVC + "/signin_user?user_name=" + user_name + "&user_password=" + user_password;

  request({
    url: url,
    json: true
  },
  function (error, response, body) {
    if (body == "-1") {
      req.session.user_id = "-1";
      req.session.user_signed_in = false;  
    }
    else {
      req.session.user_id = body;
      req.session.user_signed_in = true;  
    }

    res.redirect('/');
  });
});

router.get('/signout', function(req, res, next) {
  req.session.user_id = "-1";
  req.session.user_signed_in = false;  

  res.render('signin', { title: 'Todo' });
  return;
});

module.exports = router;
