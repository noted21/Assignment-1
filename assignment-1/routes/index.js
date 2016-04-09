var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Cards = mongoose.model('Cards');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*GET the Cards*/
router.get('/cards', function(req, res, next) {
  GraphData.find({}, {_id: 0}, function(err, data){
  if(err){ return next(err); }
  res.json(data);
  });
});


module.exports = router;
