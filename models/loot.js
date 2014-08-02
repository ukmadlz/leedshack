
'use strict';

var loot = {

  loots: [
    "Sword",
    "Shield",
    "Curse",
    "Trap",
    "Poison"
  ],

  maxmodifier: 10,

  /**
   * Gets a Loot Object
   * @return Object
   */
  getLoot: function(id) {
    if(typeof id == 'undefined') {
      return this.getLootRandom();
    }

    // @TODO retrieve Loot from database

    return {
      'name': 'Random Loot',
      'modifier': 0
    }
  },

  /**
   * Gets a random loot
   * @return Object
   */
  getLootRandom: function() {
    return {
      'name': this.getLootRandomName(),
      'modifier': this.getLootRandomModifier()
    }
  },

  getLootRandomName: function() {
    return this.loots[Math.floor(Math.random() * this.loots.length) + 1];
  },

  getLootRandomModifier: function() {
    return Math.floor(Math.random() * (2*this.maxmodifier)) - this.maxmodifier;
  }

}

module.exports = loot;
