function createPlayer(req, res) {
    var player = new db.player({
        name    : 'test1',
        level   : 1,
        game_id : params.game_id,
        x : 1,
        y : 1,
        z : 1,
    });
    
    player.save(function (err) {
        if (!err) {
          return console.log("created player");
        }
        else {
          return console.log('error creating player');
        }
    });
}

module.exports = function(db) {
    var map     = require('../map');
    var express = require('express');
    var router  = express.Router();
    
    router.use(function(req, res, next) {
        // continue to the next route
        next();
    });
    
    // Get all players
    router.get('/', function(req, res) {
        
    });
    
    // specific player getters
    router.route('/:id')
        // retrieve player state
        .get(function(req, res) {
            
            if(typeof(req.params.id) == 'undefined' || 
               typeof(req.query.action) == 'undefined'
            ) {
                
            }
            else {
            console.log('Player '+req.params.id+" : GET");
            
            db.player.findOne({'name' : req.params.id}, '_id game_id x y z', function(err, player) {
                if(err || typeof(player) == 'undefined' || player == null) {
                    console.log('Player dont exist');
                    player = new db.player({
                        name       : req.params.id.toString(),
                        identifier : req.params.id,
                        level      : 1,
                        game_id    : 1,
                        x : 1,
                        y : 1,
                        z : 1,
                    });
                }
                console.log(player);
                console.log('Action '+req.query.action);
                switch(req.query.action) {
                    case 'north':
                        player.y++;
                        break;
                    case 'south':
                        player.y--;
                        break;
                    case 'east':
                        player.x++;
                        break;
                    case 'west':
                        player.x--;
                        break
                    case 'fight':
                        // TODO
                        break;
                    case 'open':
                        // TODO
                        break;
                    case 'help':
                        // TODO
                        break;
                    default:
                        
                        break;
                }
                
                db.player.findOneAndUpdate(
                    {'_id' : player._id.toString()}, 
                    {
                        name       : player.name,
                        identifier : player.identifier,
                        level      : player.level,
                        game_id    : player.game_id,
                        x          : player.x,
                        y          : player.y,
                        z          : player.z
                        
                    },
                    {
                        upsert : true
                    },
                    function() {
                        console.log('UPDATED');
                    }
                );
                
                /*
                var params = player.game_id+'/'+player.x+','+player.y+','+player.z;
                
                map.check(params, function(obj) {
                    console.log("CHeck callback");
                    console.log(obj);
                    
                    if(obj.status == true) {
                        // save updated player object
                        
                    }
                    res.json(obj);
                });
                //*/
            });
            
            
            }
            res.json({hello: '123'});
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