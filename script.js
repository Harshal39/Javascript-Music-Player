console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementByClassName('songItem'));
let songs = [
    { songName: "Mai hu-Emiway", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 1.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 1.jpeg" },
    { songName: "Koi Kahe Kehta Rahe", filepath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 2.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 2.jpeg" },
    { songName: "New Divide-LinkinPark", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 3.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 3.jpeg" },
    { songName: "Zor see Zor laga", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 4.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 4.jpeg" },
    { songName: "Meri Pyaari Ammi", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 5.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 5.jpeg" },
    { songName: "Prassthanam", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 6.mp4", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 6.jpg" },
    { songName: "Kokh ke Rath Mein", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 7.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 7.jpg" },
    { songName: "Zinda", filePath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Songs\Song 8.mp3", coverPath: "C:\Users\harsh\OneDrive\Desktop\VS Code\HTML\Spotify\Cover\Cover 8.jpg" }
]
songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementByTagName("img")[0].src = songs[i].coverPath;
    element.getElementByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause click
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
}
)
//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = 'songs/${songIndex+1}.mp3';
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })
    document.getElementById('next').addEventListener('click', () => {
        if (songIndex > 9) {
            songIndex = 0
        }
        else {
            songIndex += 1;
        }
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

    document.getElementById('previous').addEventListener('click', () => {
        if (songIndex <= 0) {
            songIndex = 0
        }
        else {
            songIndex -= 1;
        }
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
}


