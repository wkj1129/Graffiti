var express = require('express');
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var md5 = require("md5");
var db = require("../database.js");
var bodyParser = require('body-parser');
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var note_1 = 'Hello, sign in your account to find more.';

var router = express.Router();

router.get('/' ,function(req, res, next) {

  res.render('account', { title: 'sign in', note: note_1});
 
});


router.post('/', urlencodedParser, function (req, res) {
     
   var errors=[]
    if (!req.body.username){
        errors.push("No password specified");
    }
    if (!req.body.password){
        errors.push("No email specified");
    }
    if (errors.length){
        console.log(errors[0]);
        res.redirect('/signin');
        //res.status(400).json({"error":errors.join(",")});
        note_1 = 'Username/password cannot be empty!';
    }
    else{
  
    var sql = "select * from User where user_name = ? and user_password = ?"
    var params = [req.body.username, md5(req.body.password)]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if(rows<1){
        	console.log("login fail");
        	res.redirect('/signin');
        	note_1 = 'Please try again. The account is not correct.';

        }
        else
        {
        	console.log("login success");
        	res.redirect('/');
            note_1 = 'Hello, sign in your account to find more.';

        }
      });
}
   
});


module.exports = router;