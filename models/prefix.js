
'user strict';

var prefix = {

  prefixes: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'Huge',
    'Large',
    'Frost',
    'Fire',
    'Thunder',
    'Lightening',
    'Super',
    'Awesome'
  ],

  suffixes: [
    '',
    '',
    '',
    '',
    '',
    '',
    'Rage',
    'Boomstick',
    'Neee',
    'Schwing'
  ],

  getPrefix: function() {
    var prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
    if(prefix!='') {
      prefix = prefix+' ';
    }
    return prefix;
  },

  getSuffix: function() {
    var suffix = this.suffixes[Math.floor(Math.random() * this.suffixes.length)];
    if(suffix!='') {
      suffix = ' of '+suffix;
    }
    return suffix;
  }

}

module.exports = prefix;
