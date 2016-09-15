function Game(selection) {
  this.choices = [
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock'
  ];

  this.settings = {
    'rock' : {
      'paper' : [ 'computer', 'covers' ],
      'scissors' : [ 'user', 'crushes' ],
      'lizard' :  [ 'user', 'crushes' ],
      'spock' : [ 'computer', 'vaporizes' ],
      'rock'  : [ 'tie' ],
    },
    'paper' : {
      'rock' : [ 'user', 'covers' ],
      'scissors' : [ 'computer', 'cut' ],
      'lizard' :  [ 'computer', 'eats' ],
      'spock' : [ 'user', 'disproves' ],
      'paper'  : [ 'tie' ],
    },
    'scissors' : {
      'paper' : [ 'user', 'cut' ],
      'rock' : [ 'computer', 'crushes' ],
      'lizard' :  [ 'user', 'decapitates' ],
      'spock' : [ 'computer', 'smashes' ],
      'scissors'  : [ 'tie' ],
    },
    'lizard' : {
      'paper' : [ 'user', 'eats' ],
      'scissors' : [ 'computer', 'decapitates' ],
      'rock' :  [ 'computer', 'crushes' ],
      'spock' : [ 'user', 'poisons' ],
      'lizard'  : [ 'tie' ],
    },
    'spock' : {
      'paper' : [ 'computer', 'disproves' ],
      'scissors' : [ 'user', 'smashes' ],
      'lizard' :  [ 'computer', 'poisons' ],
      'rock' : [ 'user', 'vaporizes' ],
      'spock'  : [ 'tie' ],
    },
  };


  this.player = selection;
  this.computer = this.random();
  this.results = this.calculate();
  this.winner = this.results[0];
  this.message = this.compare();

}

Game.prototype.compare = function() {
  if (this.player !== this.computer) {
    if (this.winner === 'user') {
      return this.player + ' ' + this.results[1] + ' ' + this.computer + '!';
    } else {
      return this.computer + ' ' + this.results[1] + ' ' + this.player + '!';
    }
  } else {
    return "A tie!";
  }
};

Game.prototype.calculate = function() {
  return this.settings[this.player][this.computer];
};

Game.prototype.random = function() {
  return this.choices[Math.floor(Math.random() * this.choices.length)];
};
