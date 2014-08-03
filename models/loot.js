
'use strict';

var prefix = require('./prefix.js');

var loot = {

  positiveLoot: [
    "Sword",
    "Shield",
    "Spear"
  ],

  negativeLoot: [
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
    var modifier = this.getLootRandomModifier();
    return {
      'name': this.getLootRandomName(modifier),
      'modifier': modifier
    }
  },

  /**
   * Gets a random name for the loot
   * @return string
   */
  getLootRandomName: function(modifier) {
    if(typeof modifier == 'undefined') {
      var name = this.getLootRandomNamePositive();
    }
    if(modifier>0) {
      var name = this.getLootRandomNamePositive();
    } else {
      var name = this.getLootRandomNameNegative();
    }
    return prefix.getPrefix()+name+prefix.getSuffix();
  },

  getLootRandomNamePositive: function() {
    return this.positiveLoot[Math.floor(Math.random() * this.positiveLoot.length)]
  },

  getLootRandomNameNegative: function() {
    return this.negativeLoot[Math.floor(Math.random() * this.negativeLoot.length)]
  },

  /**
   * Gets the modifier value
   * @return modifier
   */
  getLootRandomModifier: function() {
    var modifier = Math.floor(Math.random() * (2*this.maxmodifier)) - this.maxmodifier;
    if(modifier==0) {
      modifier = this.getLootRandomModifier();
    }
    if(modifier<0
      && Math.abs(modifier)>(this.maxmodifier/3)) {
        modifier = this.getLootRandomModifier();
    }
    return modifier;
  }

}

module.exports = loot;
