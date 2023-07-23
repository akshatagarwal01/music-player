console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Die For You.mp3');
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
songItems = Array.from(document.getElementsByClassName('songitem'));



let songs = [
    { songName: "Die For You", filePath: "/songs/Die For You.mp3", coverPath: "cover/Die For You.jpeg" },
    { songName: "Starboy", filePath: "/songs/Starboy.mp3", coverPath: "cover/Starboy.jpeg" },
    { songName: "After Hours", filePath: "songs/After Hours.mp3", coverPath: "cover/After Hours.jpeg" },
    { songName: "Reminder", filePath: "songs/Reminder.mp3", coverPath: "cover/Reminder.jpeg" },
    { songName: "Save Your Tears", filePath: "songs/Save Your Tears.mp3", coverPath: "cover/Save Your Tears.jpeg" },
    { songName: "Escape From LA", filePath: "songs/Ecape From LA.mp3", coverPath: "cover/Escape From LA.jpeg" },
    { songName: "Scared To Live", filePath: "songs/In Your Eyes.mp3", coverPath: "cover/Scared To Live.jpeg" },
    { songName: "Hardest To Love", filePath: "songs/Heartless.mp3", coverPath: "cover/Hardest To Love.jpeg" },
    { songName: "Blinding Lights", filePath: "songs/Blinding Lights.mp3", coverPath: "cover/Blinding Lights.jpeg" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {

    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songs[songIndex].songName}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songs[songIndex].songName}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex<= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songs[songIndex].songName}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
