var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/stack-collapse-down', function(req,res,next){
  res.render('stack-collapse', {});
});
router.get('/stack-collapse-up', function(req, res, next){
  res.render('stack-collapse-up',{});
});
router.get('/stack-collapse-mid', function(req, res, next){
  res.render('stack-collapse-mid',{});
});

router.get('/flip-right-collapse', function(req, res, next){
  res.render('flip-right-collapse.html', {});
});

module.exports = router;
