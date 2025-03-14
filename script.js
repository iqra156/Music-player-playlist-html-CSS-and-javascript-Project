let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let nextBtn = document.querySelector(".fa-forward"); // Next song button
let prevBtn = document.querySelector(".fa-backward"); // Previous song button

// List of songs (Add your song files here)
let songs = [
    "assets/audio1.ogg",
    "assets/audio2.ogg",
    "assets/audio3.ogg",
    "assets/audio4.ogg",
    "assets/audio5.ogg",
    "assets/audio6.ogg",
    "assets/audio7.ogg",
    "assets/audio8.ogg",
    "assets/audio9.ogg",
    "assets/audio10.ogg"
]

let currentSongIndex = 0; // Track the current song index

// Load metadata when the song is ready
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Function to play/pause the song
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Function to play the next song
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Move to next song, loop to start if last
    song.src = songs[currentSongIndex];
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

// Function to play the previous song
function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Move to previous song, loop to last if first
    song.src = songs[currentSongIndex];
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

// Update progress bar while the song is playing
song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

// When progress bar is manually changed
progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};

// Event listeners for next and previous buttons
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrevious);
