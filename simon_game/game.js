var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var x = 0;

$(document).keypress(function(){if(started===false){
  sequenceStart();
  started = true;
}});

function sequenceStart(){
  $("#level-title").text("Level 0");
  var randomNumber=Math.floor((Math.random()*4));
  var randomChosenColour = buttonColours[randomNumber];
  $("#"+randomChosenColour).fadeTo(200,0.3).fadeTo(200,1);
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
}

function nextSequence(){
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber=Math.floor((Math.random()*4));
  var randomChosenColour = buttonColours[randomNumber];
  $("#"+randomChosenColour).fadeTo(200,0.3).fadeTo(200,1);
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
}

function playSound(name){
  switch(name){
    case "red" :
     var red = new Audio("sounds/red.mp3");
     red.play();
     break;
     case "blue" :
     var blue = new Audio("sounds/blue.mp3");
     blue.play();
     break;
     case "yellow" :
     var yellow = new Audio("sounds/yellow.mp3");
     yellow.play();
     break;
     case "green":
     var green = new Audio("sounds/green.mp3");
     green.play();
     break;
     default : console.log(color);
  }
}

$(".btn").on("click", function(){var userChosenColour = this.id;
   playSound(userChosenColour); animatePress(userChosenColour);
   userClickedPattern.push(userChosenColour);
   if(started===true){checkAnswer(userClickedPattern.length);}
   else{$("body").addClass("game-over");
   setTimeout(function(){$("body").removeClass("game-over"); userClickedPattern.length=0; }, 150)}})

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){$("#"+currentColor).removeClass("pressed");},100);
}
function checkAnswer(currentLevel){
   if(gamePattern[x] === userClickedPattern[x]){
      console.log("yes");
      x++;
      if(gamePattern.length === currentLevel){
      userClickedPattern.length = 0;
      x = 0;
      setTimeout(function (){nextSequence();},1000);
      }}else{
    $("#level-title").text("Game Over, Press Any Key to Restart");
     var wrong = new Audio("sounds/wrong.mp3");
     wrong.play();
     $("body").addClass("game-over");
     setTimeout(function (){ $("body").removeClass("game-over");}, 150);

     startOver();
   }
}
  function startOver(){
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    level = 0;
    started = false;
  }
