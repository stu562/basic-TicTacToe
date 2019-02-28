
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