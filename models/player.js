module.exports = function(db) {
    var schema = db.Schema({
        id         : Number,
        name       : String,
        level      : Number,
        modifiers  : [],
        game_id    : Number,
        identifier : String,
        x          : Number,
        y          : Number,
        z          : Number
    });
    
    return db.model('Player', schema);
    /*
    return {
        
        create : function(params) {
            var player = new model({
                name    : params.name,
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
        },
        
        find : function(params) {
            
        },
        
    };
    //*/
};