$('.fa').click(function() {
  var game = new Game($(this).attr('data-value')),
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
  $('.results').append('<h1>' + game.message + '</h1>');
});
