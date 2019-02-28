var selectors = {
  player1Button: document.getElementById('player1'),
  player2Button: document.getElementById('player2'),
  resetButton: document.getElementById('reset'),
  numInput: document.querySelector("input[type='number']"),
}

var score = {player1:0,
              player2:0,
              winningScore:5,
            }
selectors.numInput.addEventListener('change', function(){
  score.winningScore = Number(this.value);
})

selectors.player1Button.addEventListener('click', function(){
  score.player1++;
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  checkWinner();
});

selectors.player2Button.addEventListener('click', function(){
  score.player2++;
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  checkWinner();
});

selectors.resetButton.addEventListener('click', function(){
  resetBoard();
});

function checkWinner(){
  if (score.player1 === score.winningScore){
    confirm("Player 1 is the winner! Play again?");
    resetBoard();
  } else if (score.player2 === score.winningScore) {
    confirm('Player 2 is the winner! Play again?');
    resetBoard();
  }
}

function resetBoard(){
  score = { player1:0,
    player2:0,
    winningScore:5,
  }
  document.querySelector('input').value = "5";
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
}

function togglePiece(){
  //places x or o in whereever it is clicked
  var piece = true;
  if (piece){
    !piece;
    return 'o'
  } else {
    
  }

  return 'O';
}

function placePiece(){
  //update html and place the current piece
  playerTurn();
}

function playerTurn(){
  //update and display whose turn it is 
  document.getElementsByClassName('playerTurn')[0].innerText = `It's ${togglePiece()} turn!`
}