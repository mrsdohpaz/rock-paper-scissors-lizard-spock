var rulesArray = {
    'rock' : {
        'paper' : [ 'lose', 'covers' ],
        'scissors' : [ 'win', 'crushes' ],
        'lizard' :  [ 'win', 'crushes' ],
        'spock' : [ 'lose', 'vaporizes' ],
    },
    'paper' : {
        'rock' : [ 'win', 'covers' ],
        'scissors' : [ 'lose', 'cut' ],
        'lizard' :  [ 'lose', 'eats' ],
        'spock' : [ 'win', 'disproves' ],
    },
    'scissors' : {
        'paper' : [ 'win', 'cut' ],
        'rock' : [ 'lose', 'crushes' ],
        'lizard' :  [ 'win', 'decapitates' ],
        'spock' : [ 'lose', 'smashes' ],
    },
    'lizard' : {
        'paper' : [ 'win', 'eats' ],
        'scissors' : [ 'lose', 'decapitates' ],
        'rock' :  [ 'lose', 'crushes' ],
        'spock' : [ 'win', 'poisons' ],
    },
    'spock' : {
        'paper' : [ 'lose', 'disproves' ],
        'scissors' : [ 'win', 'smashes' ],
        'lizard' :  [ 'lose', 'poisons' ],
        'rock' : [ 'win', 'vaporizes' ],
    },
};

function updateScores(theWinner) {
  var updateClass = '.' + theWinner + '-score'; 
  var score = parseInt($(updateClass).text());
  ++score;

  if (theWinner === 'user') {
   $('.active, .results').addClass('winner');
      $('.active, .results').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
        $('.active, .results').removeClass('winner');
      });
  }

  $(updateClass).empty().append(score);
}

function compareChoices(choice1, choice2) {
  if (choice1 === choice2) {
    updateScores('tie');
    return "A tie!";
  } else {
    var result = rulesArray[choice1][choice2];
    if (result[0] === 'win') {
      updateScores('user');      
      return choice1 + ' ' + result[1] + ' ' + choice2 + '!';
    } else {
      updateScores('computer');
      return choice2 + ' ' + result[1] + ' ' + choice1 + '!';
    }
  }
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function runGame(userChoice) {
  var gameChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var computerChoice = getRandom(gameChoices);
  $('.computer span').addClass('fa fa-hand-' + computerChoice + '-o fa-5x');
  var results = compareChoices(userChoice, computerChoice);
  $('.results').append('<h1>' + results + '</h1>');

}
$('.fa').click(function() {
  $('.fa').each(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  });
  $('.results').empty();
  $('.computer span').removeClass();
  $(this).addClass('active');
  runGame($(this).attr('data-value'));
});