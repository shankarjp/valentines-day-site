const player = document.getElementById("player");

function playSong(file) {
  player.src = file;
  player.play();
}
