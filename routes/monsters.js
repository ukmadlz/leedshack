var express = require('express');
var router = express.Router();
var monsterModel = require('../models/monster.js')

/* GET home page. */
router.get('/', function(req, res) {
  url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.json(monsterModel.getMonsterRandom(query.level));
});

module.exports = router;
