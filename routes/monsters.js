var express = require('express');
var router = express.Router();
var monsterModel = require('../models/monster.js')

/* GET monster. */
router.get('/', function(req, res) {
  url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var newMonster = monsterModel.getMonsterRandom(query.level);
  console.log({'New Monster':newMonster})
  res.json(newMonster);
});

router.get('/boss', function(req, res) {
  var bossMonster = monsterModel.getMonsterBoss();
  console.log({'Boss Monster':bossMonster})
  res.json(bossMonster);
});

/* GET monster */
router.get('/:level', function(req, res) {
  var newMonster = monsterModel.getMonsterRandom(req.params.level);
  console.log({'New Monster':newMonster})
  res.json(newMonster);
});

module.exports = router;
