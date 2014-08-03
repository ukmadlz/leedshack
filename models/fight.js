
'use strict';

var monsterModel = require('./monster.js')
  ,lootModel = require('./loot.js');

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

    // Rules to win
    // if you 5x more powerful it's an insta-win
    if((playerLevel/5)>monsterLevel) {
      return true;
    }

    // Monster randomly powers up
    if(Math.floor(Math.random() * 100) > 50) {
      var monsterPowerUp = 0;
      while(monsterPowerUp<1){
        monsterPowerUp = lootModel.getLootRandomModifier();
      }
      monsterLevel = monsterLevel+monsterPowerUp;
    }

    return (playerLevel>monsterLevel)?true:false;
  }

}

module.exports = fight;
