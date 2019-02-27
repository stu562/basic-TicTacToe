function randomNumber(){
  return Math.floor(Math.random() * 256)
}

function randomColor(){
  return "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
}


function handlesColorChange(){
  var titleWords = document.querySelectorAll('.colorChanger');
  for(var i = 0; i < titleWords.length; i++){
    titleWords[i].addEventListener("mouseover", function(){
      this.style.color = randomColor();
    })
    titleWords[i].addEventListener("mouseout", function(){
      this.style.color = "black";
    })
  }
}
handlesColorChange();


// var ticTacSelectors = {
//   tic: document.getElementsByClassName('tic')[0],
//   tac: document.getElementsByClassName('tac')[0],
//   toe: document.getElementsByClassName('toe')[0],
// }
// function handlesTic(){
//   ticTacSelectors.tic.addEventListener("mouseover", function(){
//     ticTacSelectors.tic.style.color = randomColor();
//   })
//   ticTacSelectors.tic.addEventListener("mouseout", function(){
//     ticTacSelectors.tic.style.color = "black";
//   })
// }  
// function handlesTac(){
//   ticTacSelectors.tac.addEventListener("mouseover", function(){
//     ticTacSelectors.tac.style.color = randomColor();
//   })
//   ticTacSelectors.tac.addEventListener("mouseout", function(){
//     ticTacSelectors.tac.style.color = "black";
//   })
// }  
// function handlesToe(){
//   ticTacSelectors.toe.addEventListener("mouseover", function(){
//     ticTacSelectors.toe.style.color = randomColor();
//   })
//   ticTacSelectors.toe.addEventListener("mouseout", function(){
//     ticTacSelectors.toe.style.color = "black";
//   })
// }  

// handlesTic();
// handlesTac();
// handlesToe();


