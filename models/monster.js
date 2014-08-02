
'use strict';

var monster = {
  // Monsters from wikipedia...plus extras
  monsters: [
    "@cbetta",
    "@jna_sh",
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
   * Gets a random monster name from list crawled off wikipedia
   * @return string
   */
  getMonsterRandomName: function() {
    return this.monsters[Math.floor(Math.random() * this.monsters.length) + 1];
  },

  /**
   * Creates a random monster level
   * @param integer base the base level to fight against
   * @return integer
   */
  getMonsterRandomLevel: function(base) {
    return Math.floor(Math.random() * 10) + 1;
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
