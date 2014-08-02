var express = require('express');
var router = express.Router();
var fightModel = require('../models/fight.js');

/* GET Fight. */
router.get('/', function(req, res) {
  url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.json({'success':fightModel.getResult(query.player,query.monster)});
});
/* POST fight */
router.post('/', function(req, res) {
  url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.json({'success':fightModel.getResult(query.player,query.monster)});
});

module.exports = router;
