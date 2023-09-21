
var userClickedPattern = [];

var level = 0;

var started = false;

var bottonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];




$(document).keypress(function() {

  if(!started){

    $("#level-text").text("level" + level);
    nextSequence();
    stsrted = true;
  }

});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer((userClickedPattern.length)-1);

});




function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success")

    if(userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {
        nextSequence()
      },1000);
    }
  }
  else {
    $("#level-title").text("Game Over Press any key to restart");
    audio = new Audio('sounds/wrong.mp3');
    audio.play();
    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    },2000);

    startOver();
  }

}




function animatePress(currentColor) {

  var pressedColor = "#" + currentColor;

  $(pressedColor).addClass("pressed");

  setTimeout(function() {
    $(pressedColor).removeClass("pressed");
  }, 100);
}





function playSound(name) {

  switch("#" + name){

  case "#red":
    var audio = new Audio('sounds/red.mp3');
    audio.play();
    break;

  case "#blue":
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
    break;

  case "#green":
    var audio = new Audio('sounds/green.mp3');
    audio.play();
    break;

  case "#yellow":
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
    break;
  }
}





function nextSequence() {

  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColor = bottonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  console.log(gamePattern);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  switch("#" + randomChosenColor){

  case "#red":
    var audio = new Audio('sounds/red.mp3');
    audio.play();
    break;

  case "#blue":
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
    break;

  case "#green":
    var audio = new Audio('sounds/green.mp3');
    audio.play();
    break;

  case "#yellow":
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
    break;
  }

  level +=1;

  $("#level-title").text("Level " + level);

}




function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
