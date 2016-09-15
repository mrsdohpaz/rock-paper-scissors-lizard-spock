$('.user .fa').click(function() {
  var selection = $(this).data('value'),
      game = new Game(selection),
      winner = game.winner,
      updateClass = '.' + winner + '-score',
      score = parseInt($(updateClass).text());

  ++score;

  $('.fa').removeClass('active');
  $('.results').empty();
  $('.computer.choice span, .user.choice span').removeClass();

  $('.computer.choice span').addClass('fa fa-hand-' + game.computer + '-o fa-3x');
  $('.user.choice span').addClass('fa fa-hand-' + game.player + '-o fa-3x');

  $(this).addClass('active');

  if (winner === 'user') {
   $('.active, .results, .user-choice').addClass('winner');
      $('.active, .results, .user-choice').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
        $('.active, .results, .user-choice').removeClass('winner');
      });
  }

  $(updateClass).empty().append(score);
  $('.results').append(game.message);
});
