function roll1() {
  var x = Math.floor(Math.random() * 6) + 1;
  document.getElementById('score1').innerHTML = x;
}

function roll2() {
  var y = Math.floor(Math.random() * 6) + 1;
  document.getElementById('score2').innerHTML = y;
}
