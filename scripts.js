/* Get Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


function updateButton() {
    let icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}


function skip() {
    console.log(this.dataset.skip);
    console.log(video.currentTime);
    video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up the event listeners */
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach( button => button.addEventListener("click", skip));