var express = require('express');
var router = express.Router();
var monsterModel = require('../models/monster.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.json(monsterModel.getMonster());
});

module.exports = router;
