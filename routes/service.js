var express = require('express');
var multer = require('multer');
var db = require("../database.js");
var formidable = require("formidable");

var fs = require("fs");

var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('service', { title: 'upload'});
 
});

router.get('/uploadDone', function(req, res, next) {

  res.render('uploadDone', { title: 'uploadDone', imagepath:"/tmp/test.png" });
 
});

router.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.uploadDir = 'public/tmp';
    form.parse(req, function(error, fields, files) {
        console.log("parsing done");
         
        if(files.upload.size==0){
        	console.log("No file selected");
           	res.redirect('/service') ;
        
       }  
        else
         	{
         		console.log(files);       
        
             var fileName = "public/tmp/test.png";
             console.log(fileName);
             fs.writeFileSync(fileName, fs.readFileSync(files.upload.path));
             res.redirect('/service/uploadDone') ;
        
           }
    });
});




module.exports = router;