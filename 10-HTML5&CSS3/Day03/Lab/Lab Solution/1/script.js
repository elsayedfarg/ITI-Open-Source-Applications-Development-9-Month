// Cache DOM elements
const videoPlayer = document.getElementById("videoPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const seekBar = document.getElementById("seekBar");

/* Play / Pause */
function togglePlayPause() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseButton.textContent = "Pause";
  } else {
    videoPlayer.pause();
    playPauseButton.textContent = "Play";
  }
}

/* Change video size */
function changeVideoSize(event) {
  const size = event.target.value;
  // if (size === "small") videoPlayer.style.width = "40vw";
  // if (size === "medium") videoPlayer.style.width = "60vw";
  // if (size === "large") videoPlayer.style.width = "80vw";
  switch (event.target.value) {
    case "small":
      videoPlayer.style.width = "40vw";
      break;

    case "medium":
      videoPlayer.style.width = "60vw";
      break;

    case "large":
      videoPlayer.style.width = "80vw";
      break;
  }
}

/* Change volume */
function changeVolume(event) {
  videoPlayer.volume = event.target.value;
}

/* Change playback speed */
function changePlaybackSpeed(event) {
  videoPlayer.playbackRate = event.target.value;
}

/* Mute / Unmute */
function toggleMute() {
  videoPlayer.muted = !videoPlayer.muted;
}

/* Loop video */
function toggleLoop() {
  videoPlayer.loop = !videoPlayer.loop;
}

function seekVideo(event) {
  videoPlayer.currentTime =
    (event.target.value / event.target.max) * videoPlayer.duration;
}

videoPlayer.addEventListener("timeupdate", function () {
  const value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  seekBar.value = value;
});

/* Fullscreen */
function toggleFullScreen() {
  videoPlayer.requestFullscreen();
}

function forwardFunction() {
  videoPlayer.currentTime += 10;
}

function backwardFunction() {
  videoPlayer.currentTime -= 10;
}

document.addEventListener("keydown", function (event) {
  // Arrow Right ➜ Forward 10 seconds
  if (event.key === "ArrowRight") {
    videoPlayer.currentTime += 10;
  }
  // Arrow Left ➜ Backward 10 seconds
  if (event.key === "ArrowLeft") {
    videoPlayer.currentTime -= 10;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    videoPlayer.volume = Math.min(1, videoPlayer.volume + 0.1);
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    videoPlayer.volume = Math.max(0, videoPlayer.volume - 0.1);
  }

  // subtitle - translate
  // provide more video
  // multipe codecs
  // video quality change
});

// ================================== TASK 1 ========================================= //
const tracks = videoPlayer.textTracks; // returns html track element as object

function changeSubtitle(lang) {
  for (let i = 0; i < tracks.length; i++) {
    tracks[i].mode = "disabled";
    if (tracks[i].language === lang) {
      tracks[i].mode = "showing";
    }
  }
}

// ================================== TASK 2 ========================================= //
function changeQuality(quality) {
  const currentTime = videoPlayer.currentTime; // where is the video now
  const isPlaying = !videoPlayer.paused;

  videoPlayer.src = `video-${quality}p.mp4`;
  videoPlayer.load();
  for (let i = 0; i < videoPlayer.textTracks.length; i++) {
    videoPlayer.textTracks[i].mode = "showing";
  }

  videoPlayer.currentTime = currentTime;

  if (isPlaying) {
    videoPlayer.play();
  }
}
