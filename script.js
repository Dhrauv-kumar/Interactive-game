let score = 0;
let timeLeft = 20;

const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

let currentHole = null;
let moleInterval;
let timer;

function showMole(){

  if(currentHole){
    currentHole.classList.remove("mole");
  }

  let randomIndex =
    Math.floor(Math.random() * holes.length);

  currentHole = holes[randomIndex];
  currentHole.classList.add("mole");
}

holes.forEach(hole => {

  hole.addEventListener("click", function(){

    if(hole === currentHole){

      score++;
      scoreDisplay.textContent = score;
      message.textContent = "🎯 Great Hit!";

      currentHole.classList.remove("mole");
      currentHole = null;

    }else{
      message.textContent = "😅 Missed!";
    }

  });

});

function startGame(){

  moleInterval = setInterval(showMole,700);

  timer = setInterval(function(){

    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if(timeLeft <= 0){

      clearInterval(timer);
      clearInterval(moleInterval);

      message.textContent =
      "🏆 Game Over! Score: " + score;

      holes.forEach(hole=>{
        hole.style.pointerEvents="none";
      });

    }

  },1000);

}

function restartGame(){

  location.reload();

}

restartBtn.addEventListener("click", restartGame);

showMole();
startGame();