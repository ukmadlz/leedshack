
'use strict';

var prefix = require('./prefix.js');

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

    // @TODO retrieve Loot from database probably won't need to implement

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

  /**
   * Gets a random name for the loot
   * @return string
   */
  getLootRandomName: function() {
    return prefix.getPrefix()+this.loots[Math.floor(Math.random() * this.loots.length) + 1];
  },

  /**
   * Gets the modifier value
   * @return modifier
   */
  getLootRandomModifier: function() {
    return Math.floor(Math.random() * (2*this.maxmodifier)) - this.maxmodifier;
  }

}

module.exports = loot;
