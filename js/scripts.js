//Business Logic
function Player(id) {
  this.turnScore = 0;
  this.totalScore = 0;
  this.id = id;
}

Player.prototype.hold = function(){
  this.totalScore += this.turnScore
  this.turnScore = 0;
  return this.totalScore

}

Player.prototype.roll = function() {
  let currentRoll = Math.floor((Math.random()*6) + 1);
  if (currentRoll != 1){
    this.turnScore += currentRoll;
  } 
  else {
    this.turnScore = 0;
  } 
  return [currentRoll, this.turnScore];
}

//UI Logic
let player1 = new Player(1);
let player2 = new Player(2);
$(document).ready(function() {
  $(".btn-roll1").click(function(event) {
    let rollValue= player1.roll()
    $("#player1CurrentScore").text(rollValue[1])
    $("#player1Roll").text(rollValue[0])
    if(rollValue[0] === 1){
      $(".btn-roll2").show();
      $(".btn-roll1").hide();
    }
  });
  $(".btn-hold1").click(function(event) {
    $("#player1TotalScore").text(player1.hold())
    $(".btn-roll2").show();
    $(".btn-roll1").hide();
    if (player1.totalScore >= 100) {
      $("#winner1").show();
    }

  });
  $(".btn-roll2").click(function(event) {
    let rollValue= player2.roll()
    $("#player2CurrentScore").text(rollValue[1])
    $("#player2Roll").text(rollValue[0])
    if(rollValue[0] === 1){
      $(".btn-roll1").show();
      $(".btn-roll2").hide();
    }
  });
  $(".btn-hold2").click(function(event) {
    $("#player2TotalScore").text(player2.hold())
    $(".btn-roll1").show();
    $(".btn-roll2").hide();
    if (player2.totalScore >= 100) {
      $("#winner2").show();
    }
  });
});