var express = require('express');
var router = express.Router();
var request = require('request');

var TODO_TASK_SVC = process.env.TODO_TASK_SVC;
var TODO_USER_SVC = process.env.TODO_USER_SVC;

router.get('/', function(req, res, next) {
  if (!req.session.user_signed_in == true) {
    res.redirect('/user/signin')
    return;  
  }

  res.redirect('/dashboard')
  return;  
});

router.get('/dashboard', function(req, res, next) {
  if (!req.session.user_signed_in == true) {
    res.redirect('/user/signin')
    return;  
  }
    url =  TODO_TASK_SVC + "/list_tasks?task_user_id=" + req.session.user_id;

  request({
    url: url,
    json: true
  },
  function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.render('dashboard', { title: 'Todo', values: body });
      return;
    }
  })
});

module.exports = router;
