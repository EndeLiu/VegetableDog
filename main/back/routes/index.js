// import {indexDefaultReceipes} from '../test/defaultReceipe'

const indexDefaultReceipes = require('../test/defaultReceipe')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hotitems', function(req, res, next) {
  res.send(indexDefaultReceipes)
});

module.exports = router;
