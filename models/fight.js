
'use strict';

var monsterModel = require('./monster.js');

var fight = {

  /**
   * Get the game result
   * @param object player  Player Object
   * @param object monster Monster Object
   * @return bool
   */
  getResult: function(player,monster) {
    if(typeof player == 'undefined'
      || typeof monster == 'undefined' ) {
        return false;
    }
    player = JSON.parse(player);
    monster = JSON.parse(monster);
    if(typeof player.overalLevel != 'undefined') {
      var playerLevel = player.overalLevel;
    } else {
      var playerLevel = monsterModel.getMonsterLevel(player);
    }
    if(typeof monster.overalLevel != 'undefined') {
      var monsterLevel = monster.overalLevel;
    } else {
      var monsterLevel = monsterModel.getMonsterLevel(monster);
    }
console.log(
  {
    'playerLevel':playerLevel,
    'monsterLevel':monsterLevel,
  }
)
    // Rules to win

    return (playerLevel>monsterLevel)?true:false;
  }

}

module.exports = fight;
