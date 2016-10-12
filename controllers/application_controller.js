var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/cats');
});

module.exports = router;
