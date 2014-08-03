
'use strict';

var loot = require('./loot.js')
  ,prefix = require('./prefix.js');

var monster = {

  // Maximum number of modifiers to attach to monster
  maxmodifiers: 3,

  // Monsters from wikipedia...plus extras
  monsters: [
    "@cbetta",
    "@jna_sh",
    "Pikachu",
    "Frankenstein",
    "Giant",
    "English Giant",
    "Greek Giant",
    "Irish Giant",
    "Jötnar",
    "King Kong",
    "Kaiju",
    "Gamera",
    "Godzilla",
    "King Kong",
    "Mothra",
    "Toho",
    "Ogres",
    "Slender Man",
    "Vampires",
    "Werewolves",
    "Akkorokamui",
    "Alraune",
    "Anguirus",
    "Argus Panoptes",
    "Aspidochelone",
    "Ayia Napa sea monster",
    "Balaur",
    "Baragon",
    "Beast of Gévaudan",
    "Behemoth",
    "Bishop-fish",
    "Bride of Frankenstein",
    "Cerberus",
    "Ceto",
    "Cetus",
    "Charybdis",
    "Chimera",
    "Chinese dragon",
    "Clover",
    "Cockatrice",
    "Coco",
    "Cookie Monster",
    "Cretan Bull",
    "Cthulhu",
    "Cyclops",
    "Ebirah",
    "Echidna",
    "Elmo",
    "Erymanthian Boar",
    "European dragon",
    "Feilong",
    "Frankenstein's monster",
    "Gamera",
    "Gill-man",
    "Goblin",
    "Gog (Marvel Comics)",
    "Gorgon",
    "Grendel",
    "Grendel's mother",
    "Grover",
    "Gruagach (Hellboy)",
    "Guivre",
    "Hafgufa",
    "Lernaean Hydra",
    "Hydros",
    "Jersey Devil",
    "Jiangshi",
    "Jörmungandr",
    "Kabandha",
    "Kraken",
    "Ladon",
    "Leviathan",
    "Lyngbakr",
    "Mares of Diomedes",
    "Medusa",
    "Milton the Monster",
    "Minotaur",
    "Monster High",
    "MUTO",
    "Necrid",
    "Nemean lion",
    "Ogdru Hem",
    "Ogdru Jahad",
    "Ogre",
    "Orthrus",
    "Parallax",
    "Pixiu",
    "Psoglav",
    "Rodan",
    "Scylla",
    "Sea monster",
    "Sea-lion",
    "Simurgh",
    "Skeleton",
    "Sluagh",
    "Sphinx",
    "Stronsay Beast",
    "Swamp monster",
    "Sweetums",
    "Telchines",
    "The Terrible Dogfish",
    "Tickle monster",
    "Titan",
    "Titanosaurus",
    "Two-Headed Monster",
    "Wani",
    "Werehyena",
    "Werewolf",
    "Werewoman",
    "Yeti",
    "Zombie",
    "Anzû"
  ],

  /**
   * Gets a monster
   * @param {[type]} id [description]
   */
  getMonster: function(id) {

    var monster = {
      'name':'Random Monster',
      'level': 1,
      'modifiers':[{}]
    };

    if(typeof id == 'undefined') {
      monster = this.getMonsterRandom();
    }

    monster.overalLevel = this.getMonsterLevel(monster);

    if(monster.overalLevel<1) {
      monster.overalLevel = 1;
    }

    return monster;
  },

  /**
   * Creates a random monster
   * @return Objest
   */
  getMonsterRandom: function(base) {
    var monster = {
      'name': this.getMonsterRandomName(),
      'level': this.getMonsterRandomLevel(base),
      'modifiers': this.getMonsterRandomModifiers()
    };

    monster.overalLevel = this.getMonsterLevel(monster);

    if(monster.overalLevel<1) {
      monster.overalLevel = 1;
    }
    return monster;
  },

  /**
   * Gets a random monster name from list crawled off wikipedia
   * @return string
   */
  getMonsterRandomName: function() {
    return prefix.getPrefix()+this.monsters[Math.floor(Math.random() * this.monsters.length) + 1];
  },

  /**
   * Creates a random monster level
   * @param integer base the base level to fight against
   * @return integer
   */
  getMonsterRandomLevel: function(base) {
    var maxLevel = 5;
    var minLevel = 1;
    // if(typeof base != 'undefined') {
    //   base = parseInt(base);
    //   maxLevel = base+2;
    //   minLevel = (base<3)?1:(base-2);
    // }
    console.log({
      'base':base,
      'max':maxLevel,
      'min':minLevel}
    );
    return Math.floor(Math.random() * maxLevel) + minLevel;
  },
  /**
   * Creates a random monsters modifiers
   * @return array object;
   */
  getMonsterRandomModifiers: function() {
    var modifiers = new Array();
    for(var i = 0;i<(Math.floor(Math.random() * this.maxmodifiers));i++){
      modifiers.push(loot.getLoot());
    }
    return modifiers;
  },

  /**
   * Gets the monsters overall level
   * @param object monster The Monster
   * @return integer
   */
  getMonsterLevel: function(monster) {
    if(typeof monster=='undefined') {
      return false;
    }
    var level = monster.level;

    for(var i = 0; i<monster.modifiers.length;i++) {
      level += monster.modifiers[i].modifier;
    }

    return level;
  },

  getMonsterBoss: function() {
    var monster =  {
      'name':'@cbetta',
      'level':20,
      'modifiers': this.getMonsterRandomModifiers()
    }

    monster.overalLevel = this.getMonsterLevel(monster);

    if(monster.overalLevel<1) {
      monster.overalLevel = 1;
    }

    return monster;
  }
}

module.exports = monster;
