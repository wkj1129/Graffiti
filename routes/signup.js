var express = require('express');
var db = require("../database.js");
var md5 = require("md5");
var bodyParser = require('body-parser');
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var note_2 = 'Hello, sign up your account for free.';

var router = express.Router();



router.get('/', function(req, res, next) {

  res.render('create_account', { title: 'sign up', note: note_2});
 
});

router.post('/', urlencodedParser, function (req, res) {
     
   var errors=[]
  
    if (!req.body.username){
        errors.push("No username specified");
    }
    if (!req.body.password){
        errors.push("No password specified");
    }
    if (!req.body.rpassword){
        errors.push("No password confirmed");
    }
    var psd = req.body.password
    var rpsd = req.body.rpassword
    if (psd!=rpsd){
        errors.push("retry password!");
    }
    

    if (errors.length){

        console.log(errors[0]);
        res.redirect('/signup');
        note_2 = 'Invalid Username/password !';
        //res.status(400).json({"error":errors.join(",")});
        //return;
    }
    else{
        
        var rsql = "select * from User where user_name = ? "
    var user = [req.body.username]
    db.all(rsql, user, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        else{
            if(rows<1){
            console.log("new account");
           
            var sql = 'INSERT INTO User (user_name, user_password) VALUES (?,?)'
            var params = [req.body.username, md5(req.body.password)]
            db.all(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                 return;
                }
            else{
               res.redirect('/signin');
              }
            });

           }
           else{
            console.log("Username has been occupied");
            res.redirect('/signup');
            note_2 = 'Username has been occupied !';
           }
        }   
      });
    }
   
});

module.exports = router;