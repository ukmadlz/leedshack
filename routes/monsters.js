var express = require('express');
var router = express.Router();
var monsterModel = require('../models/monster.js')

/* GET monster. */
router.get('/', function(req, res) {
  url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.json(monsterModel.getMonsterRandom(query.level));
});

router.get('/boss', function(req, res) {
  res.json(monsterModel.getMonsterBoss());
});

/* GET monster */
router.get('/:level', function(req, res) {
  res.json(monsterModel.getMonsterRandom(req.params.level));
});

module.exports = router;
