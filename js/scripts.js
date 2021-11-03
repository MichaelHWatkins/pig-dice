//Business Logic


// let diceRoll = function() {
  // let score = 0;
  // score = Math.floor((Math.random()*6))
  // this.turnScore = this.score;
// }

function Player(id) {
  this.turnScore = 0;
  this.totalScore = 0;
  this.id = id;
}

function Turn(player1, player2) {
  this.players = [player1, player2];
  this.currentPlayer = player1;
}

Player.prototype.hold = function(){
  this.totalScore += this.turnScore
  this.turnScore = 0;
  return this.totalScore

}

Player.prototype.changeTurn = function(){
  if(this.currentPlayer === player1){
    this.currentPlayer = player2
  }
  else{
    this.currentPlayer = player1;
  }
}

Player.prototype.roll = function() {
  let currentRoll = Math.floor((Math.random()*6) + 1);
  if (currentRoll != 1){
    this.turnScore += currentRoll;
  } 
  else {
    this.turnScore = 0;
    changeTurn()
  } 
  return [currentRoll, this.turnScore];
}
//UI Logic

let player1 = new Player(1);
let player2 = new Player(2);
$(document).ready(function() {
  let turn1 = new Turn(player1, player2)
  $(".btn-roll1").click(function(event) {
    let rollValue= turn1.currentPlayer.roll()
    $("#player1CurrentScore").text(rollValue[1])
    $("#player1Roll").text(rollValue[0])
  });
  $(".btn-hold1").click(function(event) {
    $("#player1TotalScore").text(turn1.currentPlayer.hold())
    turn1.currentPlayer.changeTurn();  
  });
  $(".btn-roll2").click(function(event) {
    $("#player2CurrentScore").text(turn1.currentPlayer.roll()[1])
    $("#player2Roll").text(rollValue[0])
  });
  $(".btn-hold2").click(function(event) {
    $("#player2TotalScore").text(turn1.currentPlayer.hold())
    turn1.currentPlayer.changeTurn();    });
});