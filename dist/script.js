function togglePlay() {
    var audio = document.getElementById("audioPlayer");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function previousTrack() {
}

function nextTrack() {

}

function changeVolume() {
    var volume = document.getElementById("volumeControl").value;
    var audio = document.getElementById("audioPlayer");
    audio.volume = volume / 100;
}

function redirectToDashboard() {
    var authenticated = true;
    if (authenticated) {
        window.location.href = "dashboard.html";
        return false; 
    } else {
        return false;
    }
}

function redirectToDashboard() {
    var authenticated = true;
    if (authenticated) {
        window.location.href = "dashboard.html";
        return false; 
    } else {
        return false;
    }
}
