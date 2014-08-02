function getPlayerParams(player) {
    return GLOBAL.map.map_id+'/'+player.x+','+player.y+','+player.z+'/'+player.name;
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
            var player;
            console.log("==============");
            
            if(typeof(req.params.id) == 'undefined' || 
               typeof(req.query.action) == 'undefined'
            ) {
                
            }
            else {
            db.player.findOne({'name' : req.params.id}, '_id name identifier level game_id x y z', function(err, player) {
                if(err || typeof(player) == 'undefined' || player == null) {
                    console.log('Player dont exist');
                    player = new db.player({
                        name       : req.params.id.toString(),
                        identifier : req.params.id,
                        level      : 1,
                        game_id    : GLOBAL.map.map_id,
                        x          : GLOBAL.map.starting.x,
                        y          : GLOBAL.map.starting.y,
                        z          : GLOBAL.map.starting.z,
                    });
                }
                
                if(player.game_id != GLOBAL.map.map_id) {
                    player.x = GLOBAL.map.starting.x;
                    player.y = GLOBAL.map.starting.y;
                    player.z = GLOBAL.map.starting.z;
                }
                
                console.log(player);
                console.log('Action '+req.query.action);
                
                switch(req.query.action) {
                    case 'north': player.y--; break;
                    case 'south': player.y++; break;
                    case 'east':  player.x++; break;
                    case 'west':  player.x--; break
                    case 'fight':
                        // TODO
                        break;
                    case 'open':
                        // TODO
                        break;
                    case 'help':
                        // TODO
                        break;
                    default: break;
                }
                
                map.check(getPlayerParams(player), function(obj) {
                    if(obj.status == true) {
                        
                        if(obj.complete == true) {
                            console.log('==============');
                            console.log('LEVEL COMPLETE');
                            console.log('==============');
                            map.create();
                        }
                        
                        // save updated player object
                        db.player.findOneAndUpdate(
                            {'_id' : player._id.toString()}, 
                            {
                                name       : player.name,
                                identifier : player.identifier,
                                level      : player.level,
                                game_id    : GLOBAL.map.map_id,
                                x          : player.x,
                                y          : player.y,
                                z          : player.z
                            },
                            {
                                upsert : true
                            },
                            function() {
                                console.log('UPDATED');
                                console.log(player);
                            }
                        );
                    }
                    
                    res.json(obj);
                });
            });
            
            
            }
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