
'use strict';

var monster = {
  /**
   */
  getMonster: function(id) {
    if(typeof id == 'undefined') {
      return this.getMonsterRandom();
    }
    // @TODO modifiers are listed purely to change base monster state against others

    return {
      'name':'Random Monster',
      'level': 1,
      'modifiers':[{}]
    };
  },

  /**
   * Creates a random monster
   * @return Objest
   */
  getMonsterRandom: function() {
    return {
      'name': this.getMonsterRandomName(),
      'level': this.getMonsterRandomLevel(),
      'modifiers': this.getMonsterRandomModifiers()
    };
  },

  /**
   * [getMonsterRandomName description]
   * @return string
   */
  getMonsterRandomName: function() {
    return 'Random Name';
  },

  /**
   * Creates a random monster level
   * @param integer base the base level to fight against
   * @return integer
   */
  getMonsterRandomLevel: function(base) {
    return 3;
  },
  /**
   * Creates a random monsters modifiers
   * @return array object;
   */
  getMonsterRandomModifiers: function() {
    return [{}];
  }
}

module.exports = monster;
