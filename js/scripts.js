function Player () {
  this.dice1 = 0;
  this.dice2 = 0;
  this.ongoingScore = 0;
  this.totalScore = 0;
};

function roll1() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  document.getElementById('score1').innerHTML = dice1;
  if (dice1 === 1) {
    alert("You rolled 1! Hold for the next player.")
  } else {
    this.ongoingScore += dice1;
  }
  return dice1;
}

function roll2() {
  var dice2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById('score2').innerHTML = dice2;
  if (dice2 === 1) {
    alert("You rolled 1! Hold for the next player.")
  } else {
    this.ongoingScore += dice2;
  }
  return dice2;
}
