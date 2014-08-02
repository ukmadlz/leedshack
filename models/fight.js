
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
    return (monsterModel.getMonsterLevel(player)>monsterModel.getMonsterLevel(monster))?true:false;
  }

}

module.exports = fight;
