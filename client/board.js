
var player1Button = document.getElementById('player1');
var player2Button = document.getElementById('player2');
var resetButton = document.getElementById('reset');
var score = {player1:0,
              player2:0,
            }

player1Button.addEventListener('click', function(){
  score.player1++;
  //needs to increment upate with new value 
  // var currentDisplay = document.getElementsByClassName('currentscore')[0].innerText;
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  // console.log(currentDisplay);
});

player2Button.addEventListener('click', function(){
  score.player2++
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;

});

resetButton.addEventListener('click', function(){
  score = { player1:0,
    player2:0,
  }
  document.getElementsByClassName('currentscore')[0].innerText = `Current Score is ${score.player1} to ${score.player2}`;
  alert('Scores were reset!');
  //needs to reset the board 
});

