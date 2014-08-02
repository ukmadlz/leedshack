var express = require('express');
var router = express.Router();
var lootModel = require('../models/loot.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.json(lootModel.getLoot());
});

module.exports = router;
