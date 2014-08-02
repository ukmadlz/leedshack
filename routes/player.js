module.exports = function(db) {
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
        // retrieve player state
        .get(function(req, res) {
            console.log('Player '+req.params.id+" : GET");
            console.log('Action '+req.query.action);
            
            res.json({id: req.params.id});
        })
        // perform an action
        .post(function(req, res) {
            console.log('Player '+req.params.id+" : POST");
            
            
            res.json({});
        });
    
    /*
     * TODO ?
     * .put() - to update data
     *
     * .delete() - to remove data
     */
    

    return router;
};