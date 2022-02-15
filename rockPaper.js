let readlineSync = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var playerName= readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any move in rock paper scissors")
var playerMove = readlineSync.question("Which move you want to do? ");
 
if (playerMove == randomMoveOfComputer){
   console.log("Match Draw both choose same");
}
else if(playerMove =="rock" && randomMoveOfComputer == "paper"){
   console.log("player won the match becouse computer choose paper and you rock");
}
else if(playerMove=="rock" && randomMoveOfComputer == "scissors"){
   console.log(playerName+" Won the match computer choose scissors");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "rock"){
   console.log(playerMove+" computer won the match computer choose rock");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "paper"){
   console.log(playerName+" Won the match computer choose paper");
}
else if(playerMove=="paper" && randomMoveOfComputer == "rock"){
   console.log(playerName+" Won the match computer choose rock");
}
else if(playerMove=="paper" && randomMoveOfComputer == "scissors"){
   console.log(playerMove+" computer won the match computer choose scissores");
}