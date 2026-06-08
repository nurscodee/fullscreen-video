const video = document.getElementById("background-video");
const btn = document.getElementById("btn");

btn.addEventListener("click", pauseVideo);

function pauseVideo() {
  //if video is pause video is play
  if (video.paused) {
    video.play();
    btn.innerText = "Pause";
  } else {
    // if video is play video is pause
    video.pause();
    btn.innerText = "Play";
  }
}
