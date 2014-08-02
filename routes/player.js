var express = require('express');
var router  = express.Router();

router.use(function(req, res, next) {
    // continue to the next route
    next();
});

// Get all players
router.get('/', function(req, res) {
    res.json({message: 'hello, there should be a player list here'});
});

// specific player getters
router.route('/:id')
    .get(function(req, res) {
        console.log('Player '+req.params.id+" : GET");
        for(p in req.params) {
            
            console.log(p+' : '+req.params[p]);
        }
        console.log('Action '+req.query.action);
        res.json({id: req.params.id});
    })
    .post(function(req, res) {
        console.log('Player '+req.params.id+" : POST");
        
    });

/*
 * TODO ?
 * .put() - to update data
 *
 * .delete() - to remove data
 */

module.exports = router;