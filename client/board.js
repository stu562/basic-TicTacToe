var buttons = {
  player1Button: document.getElementById('player1'),
  player2Button: document.getElementById('player2'),
  resetButton: document.getElementById('reset'),
}

var score = {player1:0,
              player2:0,
            }

buttons.player1Button.addEventListener('click', function(){
  score.player1++;
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  checkWinner();
});

buttons.player2Button.addEventListener('click', function(){
  score.player2++;
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  checkWinner();
});

buttons.resetButton.addEventListener('click', function(){
  resetBoard();
});

function checkWinner(){
  if (score.player1 === 5){
    alert('Player 1 is the winner')
  } else if (score.player2 === 5) {
    alert('Player 2 is the winner')
  }
}
function resetBoard(){
  score = { player1:0,
    player2:0,
  }
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  alert('Scores were reset!');
}
