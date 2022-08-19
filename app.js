const artworks = [
    { src: "img/stations/radio1.png",   sizes: '192x192',   type: 'image/png' },
    { src: "img/stations/gaga.png", sizes: '400x400', type: 'image/png' },
    { src: "img/stations/petofi.jpg",sizes: '250x250', type: 'image/jpg' },
    { src: "img/stations/retro.png", sizes: '150x150', type: 'image/png' },
    { src: "img/stations/star.jpg", sizes: '250x250', type: 'image/jpg' },
    { src: "img/stations/msvradio.png", sizes: '250x250', type: 'image/jpg' },
    { src: "img/stations/szepvizfm.jpg", sizes: '250x250', type: 'image/jpg' },
    { src: "img/stations/coolfm.png", sizes: '150x150', type: 'image/png' },
    { src: "img/stations/oxygen.webp", sizes: '150x150', type: 'image/png' },
    { src: "img/stations/best-dance.png", sizes: '150x150', type: 'image/png' },
    { src: "img/stations/profm.jpg", sizes: '180x180', type: 'image/jpg' },
    { src: "img/stations/kissfm.svg", sizes: '320x320', type: 'image/svg+xml' },
    { src: "img/stations/onefm.png", sizes: '150x150', type: 'image/png' },
    { src: "img/stations/impuls.png", sizes: '250x147', type: 'image/png' },
    { src: "img/stations/kiss-pop.png", sizes: '150x150', type: 'image/png' },
    { src: "img/stations/kiss-energy.jpg", sizes: '150x150', type: 'image/jpg' }
];

const radios = [
    { name: "Válassz rádiót", logo: "img/apple-touch.png", audio:""},
    { name: "Rádió 1", logo: "img/stations/radio1.png", audio: "https://icast.connectmedia.hu/5202/live.mp3"},
    { name: "Rádió Gaga", logo: "img/stations/gaga.svg", audio: "https://securestreams5.autopo.st:1992/player"},
    { name: "Petőfi Rádió", logo: "img/stations/petofi.jpg", audio: "https://icast.connectmedia.hu/4738/mr2.mp3"},
    { name: "Retró Rádió", logo: "img/stations/retro.png", audio: "https://icast.connectmedia.hu/5001/live.mp3"},
    { name: "Star Rádió", logo: "img/stations/star.jpg", audio: "http://live.starradio.ro:9000/;"},
    { name: "Marosvásárhelyi Rádió", logo: "img/stations/msvradio.png", audio: "http://stream2.srr.ro:8312/;"},
    { name: "Szépvíz FM", logo: "img/stations/szepvizfm.jpg", audio: "https://stream2.rdstrm.com/szepviz-radio.mp3"},
    { name: "Cool FM", logo: "img/stations/coolfm.png", audio: "https://mediagw.e-tiger.net/stream/coolfm"},
    { name: "Oxygen Music", logo: "img/stations/oxygen.webp", audio: "https://oxygenmusic.hu:8000/oxygenmusic_128"},
    { name: "Best-Dance Radio", logo: "img/stations/best-dance.png", audio: "https://ssl.omegahost.ro/8088/;"},
    { name: "ProFM", logo: "img/stations/profm.jpg", audio: "https://edge126.rcs-rds.ro/profm/profm.mp3"},
    { name: "Kiss FM", logo: "img/stations/kissfm.svg", audio: "https://live.kissfm.ro/kissfm.aacp"},
    { name: "One FM", logo: "img/stations/onefm.png", audio: "https://live.onefm.ro/onefm.aacp"},
    { name: "Radio Impuls", logo: "img/stations/impuls.png", audio: "https://live.radio-impuls.ro/stream"},
    { name: "Kiss-Pop", logo: "img/stations/kiss-pop.png", audio: "https://live.kissfm.ro/kiss.xtra"},
    { name: "Kiss-Energy", logo: "img/stations/kiss-energy.jpg", audio: "https://live.kissfm.ro/kiss.energy"}
];

const mediaAPI = ('mediaSession' in navigator);
let lastOnline = null;
let theme = null;
let nowPlaying = 0;
let favorites = [];
createRadioList();

if(localStorage.getItem("favorites")){
    let string = localStorage.getItem("favorites");
    const arr = string.split(',');
    arr.pop();
    for(let i=0; i<arr.length; i++){
        favorites.push(Number(arr[i]));
    }
    updateFavList();
}

if(localStorage.getItem("theme") === "white") {
    theme = "white";
    themeSet();
}


if(!navigator.onLine){
    if(confirm("Nincs internetkapcsolat. Próbáljuk újra?")) location.reload();
    else close();
}

window.addEventListener("offline", function() {
    let id = 0;
    let max = document.getElementsByTagName('audio').length;
    while(id < max){
        if(!document.getElementsByTagName('audio')[id].paused){
            lastOnline = document.getElementsByTagName("audio")[id];
            setTimeout(function (){lastOnline = null;}, 300000);
            break;
        }
        ++id;
    }
    console.log("offline");
});

window.addEventListener("online", function() {
    if(lastOnline) {
        if(!lastOnline.paused)lastOnline.load();
        lastOnline.play();
        lastOnline = null;
        console.log("online again");
    }
});

function createRadioList(){
    for(let i=1; i<radios.length; i++){
        let image = document.createElement('img');
        image.src = radios[i].logo;
        image.alt = radios[i].name + "logo";
        let button = document.createElement('button');
        button.appendChild(image);
        button.innerHTML += " " + radios[i].name;
        button.classList.add("radio-button");
        button.onclick = function (){
            radioSelect(i);
        }
        if(radios[i].name === "ProFM") document.getElementById("radioList").appendChild(document.createElement('hr'));
        document.getElementById("radioList").appendChild(button);
    }
}

function mediaSessionInit(){
    navigator.mediaSession.metadata = new MediaMetadata();
    navigator.mediaSession.metadata.artist = "Saját Rádió";
    navigator.mediaSession.metadata.title = "Saját Rádió";
    navigator.mediaSession.metadata.artwork = [ { src: "radio/img/apple-touch.png", sizes: '192x192', type: 'image/png'} ];
    navigator.mediaSession.setActionHandler('nexttrack', () => {
        for(let i=0; i<favorites.length; i++){
            if(favorites[i] === nowPlaying){
                if(i === favorites.length-1) radioSelect(favorites[0]);
                else radioSelect(favorites[i+1]);
                break;
            }
        }
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
        for(let i=0; i<favorites.length; i++){
            if(favorites[i] === nowPlaying){
                if(i === 0) radioSelect(favorites[favorites.length - 1]);
                else radioSelect(favorites[i-1]);
                break;
            }
        }
    });
}

function radioSelect(selected){
    document.getElementById("audio").src = radios[selected].audio;
    let playPromise = document.getElementById("audio").play();
    document.getElementById("title").innerText = radios[selected].name;
    document.getElementById("big-logo").src = radios[selected].logo;
    nowPlaying = selected;
    console.log(playPromise);
    if(playPromise !== undefined){
        playPromise.catch(function (){
            if(document.getElementById('audio').paused) {
                window.open(radios[selected].audio, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,height=50px,width=300px');
                document.getElementById("title").innerText = "Ez a rádió csak új ablakban indul el!";
                console.log("rejected");
            }
            });
    }

    let image = document.createElement("img");
    let button = document.createElement("button");
    button.style.float = "right";
    button.appendChild(image);
    document.getElementById("title").appendChild(button);
    button.onclick = function () {
        if(favorites.includes(selected)){
            removeFromFavorites(selected);
            image.src = "img/star.png";
        } else{
            addToFavorites(selected);
            image.src = "img/star-filled.png";
        }
    }
    if(favorites.includes(selected)){
        image.src = "img/star-filled.png";
    } else {
        image.src = "img/star.png";
    }

    if(mediaAPI){
        if(navigator.mediaSession.metadata == null) mediaSessionInit();
        navigator.mediaSession.metadata.title = radios[selected].name;
        navigator.mediaSession.metadata.artwork = [artworks[selected-1]];
    }
}

// ~~~~~ KEDVENCEK FUNKCIOK ~~~~~

function addToFavorites(nr){
    favorites.push(nr);
    let string = "";
    for(let i=0; i<favorites.length; i++){
        string += favorites[i] + ',';
    }
    localStorage.setItem("favorites", string);
    updateFavList();
}

function removeFromFavorites(nr){
    const fav2 = [];
    for(let i=0; i<favorites.length; i++){
        if(favorites[i] !== nr) fav2.push(favorites[i]);
    }
    favorites = fav2;
    let string = "";
    for(let i=0; i<favorites.length; i++){
        string += favorites[i] + ',';
    }
    localStorage.setItem("favorites", string);
    updateFavList();
}

function updateFavList(){
    document.getElementById("favorites").innerHTML = "<h1> Kedvencek </h1>";
    for(let i=0; i<favorites.length; i++) {
        let button = document.createElement("button");
        let image = document.createElement("img");
        image.src = radios[favorites[i]].logo;
        image.classList.add("favoriteLogo");
        button.classList.add("favoriteButton");
        button.appendChild(image);
        button.onclick = function (){
            radioSelect(favorites[i]);
        }
        document.getElementById("favorites").appendChild(button);
    }
}

// ~~~~~ IDOZITO FUNKCIOK ~~~~~

function idozitoMenuBe(){
    document.getElementById("popup_menu").style.display = "block";
}
function idozitoMenuKi(){
    document.getElementById("popup_menu").style.display = "none";
}

let idozites = [
    null,
    null,
    null
];

function ido(min){
    if(idozites[0] !== null) {
        clearTimeout(idozites[0]);
        clearInterval(idozites[2]);
    }
    if(min === 0) {
        idozites[0] = null;
        idozites[1] = null;
        idozites[2] = null;
        document.getElementById("timer-button").innerHTML = "<img id=\"timer-icon\" src=\"img/timer.png\" alt=\"timer-icon\">";
    }
    else {
        idozites[0] = setTimeout(stopAll, min*60000);
        idozites[1] = Date.now() + min*60000;
        idozites[2] = setInterval(countdown, 1000);
        document.getElementById("timer-button").innerText = min + ":00";
    }
    idozitoMenuKi();
}

function stopAll(){
    document.getElementById("audio").pause();
    clearInterval(idozites[2]);
    idozites[1] = null;
    idozites[2] = null;
    document.getElementById("timer-button").innerHTML = "<img id=\"timer-icon\" src=\"img/timer.png\" alt=\"timer-icon\">";
}

function countdown(){
    let until = idozites[1] - Date.now();
    let minutes = until/60000;
    let seconds = (until/1000)%60;
    let text = Math.floor(minutes) + ":";
    if(Math.floor(seconds) < 10) text += "0" + Math.floor(seconds);
    else text += Math.floor(seconds);
    document.getElementById("timer-button").innerText = text;
}

// ~~~~~ TEMA FUNKCIOK ~~~~~

function themeSwitch() {
    if(theme === "white") theme = "black";
    else theme = "white";
    themeSet();
}
function themeSet() {
    if(theme === "white"){
        document.body.style.backgroundImage = "linear-gradient(#cfc, white)";
        document.body.style.color = "black";
        for(let i=0; i<document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].style.color = "black";
        }
    } else{
        document.body.style.backgroundImage = "linear-gradient(#020, black)";
        document.body.style.color = "white";
        for(let i=0; i<document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].style.color = "white";
        }
    }
    localStorage.setItem("theme", theme);
}