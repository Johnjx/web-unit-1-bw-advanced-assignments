// you need a random selection function for your computer to pick a move each turn

// let computer = Math.random();
// if(computer <= 0.34){
//   computer = 'rock'
// }else if (computer <= 0.67){
//   computer = 'paper';
// }else if (computer > 0.67) {
//   computer = 'scissors';
// }

// you need a function for win/loss/tie scenarios

// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case

// function game(user, computer){
//   if(user === computer){
//     return `it's a tie`;
//   }else if (user === 'rock' && computer ==='scissors'){
//     return `you win!`;
//   }else if (user === 'paper' && computer === 'rock') {
//     return `you win!`;
//   }else if (user === 'scissors' && computer === 'paper'){
//     return `you win!`;
//   }else {
//     return `you lose!`;
//   }
// }

// console.log(game('rock', computer));

// you need to create selectors to update the scores and the moves being displayed
// you also need a selector for your move selection buttons


// const humanRock = document.getElementById("rock");
// const humanMove = document.querySelector("div .human-move");

// humanRock.addEventListener('click', function (){
//   humanMove.classList.toggle("test");
// });

const rockChoice = "fas fa-hand-rock";
const paperChoice = "fas fa-hand-paper";
const scissorsChoice = "fas fa-hand-scissors";
const randomChoice = [rockChoice, paperChoice, scissorsChoice];


const humanScore = document.getElementById("hScore");
const computerScore = document.getElementById("cScore")
const choices  = document.querySelectorAll('button');
const humanChoice = document.querySelector(".human-move i");
const compChoice = document.querySelector(".comp-move i");

let humanCount = 0;
let compCount = 0;

// you need to update the display area to show your move for each turn



const tie = () => {
  document.getElementById("displayMessage").innerHTML = "Tie!";
}

const win = () => {
  document.getElementById("displayMessage").innerHTML = "You Win!";
  humanCount++;
}

const loss = () => {
  document.getElementById("displayMessage").innerHTML = "You lose!";
  compCount++;
}

const game = () => {
  choices.forEach(move => {
    move.addEventListener('click', (evt) => {
      let buttonClick = evt.target.className;
      humanChoice.className = buttonClick;

      let random = Math.floor(Math.random() * 3);
      compChoice.className = randomChoice[random];

      if (humanChoice.className === compChoice.className) {
        tie();
      }

      else if (humanChoice.className === rockChoice && compChoice.className === scissorsChoice) {
          win();
          humanScore.innerHTML = humanCount;
      } else if (humanChoice.className === paperChoice && compChoice.className === rockChoice) {
        win();
        humanScore.innerHTML = humanCount;
      } else if (humanChoice.className === scissorsChoice && compChoice.className === paperChoice) {
        win();
        humanScore.innerHTML = humanCount;
      } else {
        loss();
        computerScore.innerHTML = compCount;
      }




    });
  });
};

game();
