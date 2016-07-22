var audio_green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio_red = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio_yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio_blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var strict = document.getElementById('switch');
var aiPrinting = 0;

function clicked(x,y) {
  if (y==0 && aiPrinting==1) {
    alert('wait');
  }
  else {
    switch(x) { 
      case 'green':
        audio_green.play();
        $("#00").css("background-color", "#13ff7c");
        $("#01").css("background-color", "#13ff7c");
        $("#10").css("background-color", "#13ff7c");
        setTimeout(function() {
          $("#00").css("background-color", "#00a74a");
          $("#01").css("background-color", "#00a74a");
          $("#10").css("background-color", "#00a74a");
        }, 500);
        if (y==0 && aiSteps[playerSteps]!=0) {
          if (strict.checked) {
            alert("wrong button ... let's try again");
            reset();
            game(aiSteps);
          }
          else {
            alert("wrong button");
            playerSteps=0;
            printSteps(aiSteps);  
          }
        }
        else if (y==0 && playerSteps==level-1) {
          game(aiSteps);
        }
        else if (y==0) {
          playerSteps++;
        }
        break;
      case 'red':
        audio_red.play();
        $("#02").css("background-color", "#ff4c4c");
        $("#03").css("background-color", "#ff4c4c");
        $("#13").css("background-color", "#ff4c4c");
        setTimeout(function() {
          $("#02").css("background-color", "#9f0f17");
          $("#03").css("background-color", "#9f0f17");
          $("#13").css("background-color", "#9f0f17");
        }, 500);
        if (y==0 && aiSteps[playerSteps]!=1) {
          if (strict.checked) {
            alert("wrong button ... let's try again");
            reset();
            game(aiSteps);
          }
          else {
            alert("wrong button");
            playerSteps=0;
            printSteps(aiSteps);  
          }
        }
        else if (y==0 && playerSteps==level-1) {
          game(aiSteps);
        }
        else if (y==0) {
          playerSteps++;
        }
        break;
      case 'yellow':
        audio_yellow.play();
        $("#20").css("background-color", "#fed93f");
        $("#30").css("background-color", "#fed93f");
        $("#31").css("background-color", "#fed93f");
        setTimeout(function() {
          $("#20").css("background-color", "#cca707");
          $("#30").css("background-color", "#cca707");
          $("#31").css("background-color", "#cca707");
        }, 500);
        if (y==0 && aiSteps[playerSteps]!=2) {
          if (strict.checked) {
            alert("wrong button ... let's try again");
            reset();
            game(aiSteps);
          }
          else {
            alert("wrong button");
            playerSteps=0;
            printSteps(aiSteps);  
          }
        }
        else if (y==0 && playerSteps==level-1) {
          game(aiSteps);
        }
        else if (y==0) {
          playerSteps++;
        }
        break;
      case 'blue':
        audio_blue.play();
        $("#23").css("background-color", "#1c8cff");
        $("#32").css("background-color", "#1c8cff");
        $("#33").css("background-color", "#1c8cff");
        setTimeout(function() {
          $("#23").css("background-color", "#094a8f");
          $("#32").css("background-color", "#094a8f");
          $("#33").css("background-color", "#094a8f");
        }, 500);
        if (y==0 && aiSteps[playerSteps]!=3) {
          if (strict.checked) {
            alert("wrong button ... let's try again");
            reset();
            game(aiSteps);
          }
          else {
            alert("wrong button");
            playerSteps=0;
            printSteps(aiSteps);  
          }
        }
        else if (y==0 && playerSteps==level-1) {
          game(aiSteps);
        }
        else if (y==0) {
          playerSteps++;
        }
        break;
      }
    }
  }

var level = 0;
var aiSteps = [];
var playerSteps = 0;

function printSteps(x) {
  aiPrinting = 1;
  var i = 0;
  var len = x.length;
  var print = setInterval(function(){
    if (i < len) {
      switch(x[i]) {
        case 0:
          clicked('green',1);
          i++;
          end;
        case 1:
          clicked('red',1);
          i++;
          end;
        case 2:
          clicked('yellow',1);
          i++;
          end;
        case 3:
          clicked('blue',1);
          i++;
          end;
      }
    }
    else {
      clearInterval(print);
      aiPrinting = 0;
    }
  }, 1000)
}

function addStep(x) {
  var rand = Math.floor(Math.random() * 4);
  x.push(rand);
}



function game(x) {
  if (level==20) {
    alert('you win ... wanna play again?');
    reset();
    game(aiSteps);
  }
  else {
    addStep(x);
    printSteps(x);
    playerSteps = 0;
    level++;
    document.getElementById("level").innerHTML = level; 
  }
}

function reset() {
  playerSteps = 0;
  level = 0;
  aiSteps = [];
  document.getElementById("level").innerHTML = '--';
}