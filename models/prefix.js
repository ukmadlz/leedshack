
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

  getPrefix: function() {
    var prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
    if(prefix!='') {
      prefix = prefix+' ';
    }
    return prefix;
  }

}

module.exports = prefix;
