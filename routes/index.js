var express = require('express');
var router = express.Router();




var homeRouter = require('./home');
var serviceRouter = require('./service');
var reportRouter = require('./checklist');

router.use('/home', homeRouter);
router.use('/service', serviceRouter);
router.use('/checklist', reportRouter);
router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
//router.use('/signout', require('./signout'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});


router.get('/hello', function(req, res, next) {
	console.log(req.session.user);
  res.send('The time is ' + new Date().toString());
});

module.exports = router;
