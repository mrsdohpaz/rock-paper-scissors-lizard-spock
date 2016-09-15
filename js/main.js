$('.user .fa').click(function() {
  var selection = $(this).data('value'),
      game = new Game(selection),
      winner = game.winner,
      updateClass = '.' + winner + '-score',
      score = parseInt($(updateClass).text());

  ++score;

  $('.fa').removeClass('active');
  $('.results').empty();
  $('.computer span, .user-choice span').removeClass();

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
