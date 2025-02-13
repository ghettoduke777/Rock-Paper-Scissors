let result = "";
let score = "";
let humanScore = 0;
let computerScore = 0;
function playGame(play, gameScore) {
    roundWinner = play();
    gameWinner = gameScore();
function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultDiv = document.getElementById('result');
    
    let result = '';
    if (userChoice === computerChoice) {
        result = `It's a tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    resultDiv.textContent = result;
};/*

    documen.getElementById("result").innerHTML = result;
    document.getElementById("btn1").addEventListener("click", result);
    document.getElementById("btn2").addEventListener("click", result);
    document.getElementById("btn3").addEventListener("click", result);
}



    return result;
    console.log(result);
//Play(user...)

*/
 function gameScore(humanScore, computerScore) {
     let gameNumber = "";
     let i = i;
     do {
         if (i===1) {
             gameNumber = "First" + " " + i;
         }else if(i < 5) {
             gameNumber = "Current" + " " + i;
         }else{
             gameNumber = "Final" + " " + i;
         }
         i++;
     }
     while (i < 6);
     document.getElementById("").innerHTML = gameNumber;
     
     for let (i=0, i < 5, i +3) {
  gameNumber += "Game " + i;
      
 let humanScore = 0;
  for let (i=0, i < 5, i++) {
  humanScore += "The score is " + i;
      humanScore++
      console.log(humanScore);
 
 let computerScore = 0;
  while (computerScore < 5) {
  computerScore += "The score is " + computerScore;
  computerScore++
      console.log(computerScore);
}
   document.getElementById("display1").innerHTML = score;
     
     function Winner(roundWinner,gameWinner) {
         let computerScore = 
  let humanScore = document.getElementById("").value;
  let gWinner = (humanScore>=3 || computerScore>=3) ? "humanScore":"computerScore";
  document.getElementById("output").innerHTML = gWinner + " Wins." + humanScore +":" + computerScore;
}  
    
    */ 
    playGame(playRound, gameScore);
}

document.getElementbyId("output").innerHTML = "Game" ${g}, ${p} "?"
   
/*
function playGame(playRound, winner) {
      document.getElementById("demo").innerHTML = x ;
      document.getElementById("display").innerHTML = g;
     var humanScore = 0;
      var computerScore = 0;
      
    for let (i=0, i < 5, i++) {
  gameNumber += "Game " + i;
    
 let humanScore = 0;
  for let (i=0, i < 5, i++) {
  humanScore += "The score is " + i;
 
 let computerScore = 0;
  while (i < 5) {
  computerScore += "The score is " + i;
    i++
  }
   document.getElementById("display1").innerHTML = score;
  }
      var x = playRound();
      function playRound(getD, getY) {
        function playRound(getD) {
        let p = prompt("Please enter your name", "Rock Paper Scissors");
      let text;
      if (p == null || p == "") {
        t = "User cancelled the prompt.";
      } else if (p = "Rock") {
        t = "Player Entered" + p + "?";
      } else if (p = "Scissors") {
        t = "Player Entered " + p + "?";
      } else (p = "Paper") {
        t = "Player Entered" + p + "?";
      }
      document.getElementById("demo").innerHTML= ${t}; <br /> "The computer selected" + ${n}; 
    }
      }
        
      var y = getComputerChoice();
      function getComputerChoice() {
        function gameFunction(Rock, Paper, Scissors) {
      const r = Math.floor(Math.random() * 3)+1;
      let n = "";
      let n;
switch (r) {
  case 1:
    n = "Rock";
    break;
  case 2:
    n = "Paper";
    break;
  case 3:
    n = "Scissors";
    break;
      }
        window.alert("Opponent: " ${n});
      
}
 
        playRound() {
    for let (i=0, i < 5, i++) {
  gameNumber += "Game " + i;
      
 let humanScore = 0;
  for let (i=0, i < 5, i++) {
  humanScore += "The score is " + i;
 
 let computerScore = 0;
  while (i < 5) {
  computerScore += "The score is " + i;
  i++
}
   document.getElementById("display1").innerHTML = score;
 
  function gameWinner(humanSore, computerScore) {
  let  = document.getElementById("display1").value;
  let gameWinner = (humanScore>=3 || computerScore>=3) ? "humanScore":"computerScore";
  document.getElementById("output").innerHTML = gameWinner + " Wins." + humanScore +":" + computerScore;
}     
    */

