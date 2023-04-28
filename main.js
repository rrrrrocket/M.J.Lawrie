const playButton = document.getElementById('verity-audio');
const audio = document.getElementById('my-audio');

let selectedTrack = audio;

playButton.addEventListener('click', function () {
  if (selectedTrack.paused) {
    selectedTrack.play();
  } else {
    selectedTrack.pause();
  }
});
