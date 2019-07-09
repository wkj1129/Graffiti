var express = require('express');
var db = require("../database.js")
var bodyParser = require('body-parser');
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var note_1 = 'Hello, sign in your account to find more.';
var note_2 = 'Hello, sign up your account for free.';

var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('account', { title: 'sign in', note: note_1});
 
});


router.post('/signin', urlencodedParser, function (req, res) {
     
   var errors=[]
    if (!req.body.username){
        errors.push("No password specified");
    }
    if (!req.body.password){
        errors.push("No email specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
  
    var sql = "select * from User where user_name = ? and user_password = ?"
    var params = [req.body.username, req.body.password]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if(rows<1){
        	console.log("fail");
        	res.redirect('/account');
        	note_1 = 'Please try again. The account is not correct.';

        }
        else
        {
        	console.log("success");
        	res.redirect('/');

        }
      });
   
});

router.get('/signup', function(req, res, next) {

  res.render('create_account', { title: 'sign up', note: note_2});
 
});

router.post('/signup', urlencodedParser, function (req, res) {
     
   var errors=[]
    if (!req.body.username){
        errors.push("No password specified");
    }
    if (!req.body.password){
        errors.push("No email specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
  
    var sql = "select * from User where user_name = ? and user_password = ?"
    var params = [req.body.username, req.body.password]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if(rows<1){
        	console.log("fail");
        	res.redirect('/account');
        	note_1 = 'Please try again. The account is not correct.';

        }
        else
        {
        	console.log("success");
        	res.redirect('/');

        }
      });
   
});

module.exports = router;