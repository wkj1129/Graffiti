var express = require('express');


var router = express.Router();


router.get('/', function(req, res, next) {

  res.render('checklist', { title: 'checklist'});
 
});



module.exports = router;