const player = document.getElementById("player");
const songImage = document.getElementById("songImage");
const songTitle = document.getElementById("songTitle");

function playSong(audioFile, imageFile, titleText) {
  // Play audio
  player.src = audioFile;
  player.play();

  // Update image + title
  songImage.src = imageFile;
  songTitle.innerText = titleText;
}
