const radios = [
    { name: "Válassz rádiót", logo: "img/apple-touch.png", audio:""},
    { name: "Rádió 1", logo: "img/stations/radio1.png", audio: "https://icast.connectmedia.hu/5202/live.mp3"},
    { name: "Rádió Gaga - Príma Rádió", logo: "img/stations/gaga.png", audio: "https://securestreams5.autopo.st:1992/player"},
    { name: "Petőfi Rádió", logo: "img/stations/petofi.jpg", audio: "https://icast.connectmedia.hu/4738/mr2.mp3"},
    { name: "Retró Rádió", logo: "img/stations/retro.png", audio: "https://icast.connectmedia.hu/5001/live.mp3"},
    { name: "Marosvásárhelyi Rádió", logo: "img/stations/msvradio.png", audio: "http://stream2.srr.ro:8312/;"},
    { name: "Szépvíz FM", logo: "img/stations/szepvizfm.jpg", audio: "https://stream2.rdstrm.com/szepviz-radio.mp3"},
    { name: "Cool FM", logo: "img/stations/coolfm.png", audio: "https://mediagw.e-tiger.net/stream/coolfm"},
    { name: "Oxygen Music", logo: "img/stations/oxygen.webp", audio: "https://oxygenmusic.hu:8000/oxygenmusic_128"},
    { name: "Best-Dance Radio", logo: "img/stations/best-dance.png", audio: "https://ssl.omegahost.ro/8088/;"},
    { name: "ProFM", logo: "img/stations/profm.jpg", audio: "https://edge126.rcs-rds.ro/profm/profm.mp3"},
    { name: "Kiss FM", logo: "img/stations/kissfm.svg", audio: "https://live.kissfm.ro/kissfm.aacp"},
    { name: "One FM", logo: "img/stations/onefm.png", audio: "https://live.onefm.ro/onefm.aacp"},
    { name: "Radio Impuls", logo: "img/stations/impuls.png", audio: "https://live.radio-impuls.ro/stream"},
    { name: "Dance FM", logo: "img/stations/dancefm.png", audio: "https://edge126.rcs-rds.ro/profm/dancefm.mp3"},
    { name: "Digi FM", logo: "img/stations/digifm.svg", audio: "https://edge76.rcs-rds.ro/digifm/digifm.mp3"},
    { name: "Radio ZUM", logo: "img/stations/radiozum.png", audio: "https://stream.radiozum.md/live"},
    { name: "Europa FM", logo: "img/stations/europafm.png", audio: "https://astreaming.edi.ro:8443/EuropaFM_aac"},
    { name: "Rock FM", logo: "img/stations/rockfm.png", audio: "https://live.rockfm.ro/rockfm.aacp"},
    { name: "Magic FM", logo: "img/stations/magicfm.png", audio: "https://live.magicfm.ro/magicfm.aacp"},
    { name: "Kiss - Pop", logo: "img/stations/kiss-pop.png", audio: "https://live.kissfm.ro/kiss.xtra"},
    { name: "Kiss - Energy", logo: "img/stations/kiss-energy.jpg", audio: "https://live.kissfm.ro/kiss.energy"}
];

const mediaAPI = ('mediaSession' in navigator);
let lastOnline = null;
let theme = null;
let nowPlaying = 0;
let favorites = [];
console.log("ESZKOZ ADATOK: \n\t" + navigator.userAgent);
createRadioList();

if(localStorage.getItem("lastStation")){
    document.getElementById("autoplay").checked = true;
    radioSelect(localStorage.getItem("lastStation"));
}

if(localStorage.getItem("favorites")){
    let string = localStorage.getItem("favorites");
    const arr = string.split(',');
    arr.pop();
    for(let i=0; i<arr.length; i++){
        favorites.push(Number(arr[i]));
    }
    updateFavList();
} else {
    let text = document.createElement('p');
    text.style.padding = "20px";
    text.style.fontSize = "12px";
    text.innerText = "Kedvencek hozzáadásához kattints a rádióra, majd a csillag ikonra.";
    document.getElementById("favorites").appendChild(text);
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
    if(!document.getElementById('audio').paused){
        lastOnline = nowPlaying;
        setTimeout(function (){lastOnline = null;}, 300000);
    }
    console.log("offline");
});

window.addEventListener("online", function() {
    if(lastOnline) {
        if(!document.getElementById('audio').paused)document.getElementById('audio').load();
        document.getElementById('audio').play();
        lastOnline = null;
        console.log("online again");
    }
});

document.getElementById("autoplay").addEventListener("click", function (){
    if(document.getElementById("autoplay").checked) {
        localStorage.setItem("lastStation", nowPlaying);
    } else {
        localStorage.removeItem("lastStation");
    }
});

function createRadioList(){
    for(let i=1; i<radios.length; i++){
        let image = document.createElement('img');
        image.src = radios[i].logo;
        image.alt = radios[i].name + "logo";
        image.classList.add("radio-button-logo");
        let button = document.createElement('button');
        button.appendChild(image);
        let text = document.createElement('span');
        text.innerText = " " + radios[i].name;
        text.style.verticalAlign = "middle";
        text.style.marginLeft = "5px";
        button.appendChild(text);
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
        if(favorites.length !== 0) {
            let i;
            for (i = 0; i < favorites.length; i++) {
                if (favorites[i] === nowPlaying) {
                    if (i === favorites.length - 1) radioSelect(favorites[0]);
                    else radioSelect(favorites[i + 1]);
                    break;
                }
            }
            if(i === favorites.length) radioSelect(favorites[0]);
        }
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
        if(favorites.length !== 0) {
            let i;
            for (i = 0; i < favorites.length; i++) {
                if (favorites[i] === nowPlaying) {
                    if (i === 0) radioSelect(favorites[favorites.length - 1]);
                    else radioSelect(favorites[i - 1]);
                    break;
                }
            }
            if(i === favorites.length) radioSelect(favorites[i-1]);
        }
    });
}

function radioSelect(selected){
    document.getElementById("audio").src = radios[selected].audio;
    let playPromise = document.getElementById("audio").play();
    document.getElementById("title").innerText = radios[selected].name;
    document.getElementById("big-logo").src = radios[selected].logo;
    nowPlaying = selected;
    if(document.getElementById("autoplay").checked) localStorage.setItem("lastStation", selected);
    if(playPromise !== undefined){
        playPromise.then(function (){
            if(mediaAPI){
                if(navigator.mediaSession.metadata == null) mediaSessionInit();
                navigator.mediaSession.metadata.title = radios[selected].name;
                navigator.mediaSession.metadata.artwork = [{src: radios[selected].logo}];
            }
        })
            .catch(error => function (){
                console.error(error);
                document.getElementById("title").innerText = error; //test!!!
                if(document.getElementById('audio').paused) {
                    if(favorites.length === 0) alert("Ez a rádió csak új ablakban indul el!");
                    window.open(radios[selected].audio, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,height=50px,width=300px');
                    console.log("Play promise rejected");
                }
            });
    }

    let image = document.createElement("img");
    let button = document.createElement("button");
    button.style.float = "right";
    button.onmouseover = function (){
        button.style.backgroundColor = "unset";
        image.style.scale = "1.2";
    };
    button.onmouseleave = function (){
        image.style.scale = "unset";
    };
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
        for (let i = 0; i < favorites.length; i++) {
            let button = document.createElement("button");
            let image = document.createElement("img");
            image.src = radios[favorites[i]].logo;
            image.classList.add("favoriteLogo");
            button.classList.add("favoriteButton");
            button.appendChild(image);
            button.onclick = function () {
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
        document.body.style.backgroundImage = "linear-gradient(#dfd, white)";
        document.body.style.color = "black";
        document.body.style.colorScheme = "normal";
        for(let i=0; i<document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].style.color = "black";
        }
    } else{
        document.body.style.backgroundImage = "linear-gradient(#020, black)";
        document.body.style.color = "white";
        document.body.style.colorScheme = "dark";
        for(let i=0; i<document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].style.color = "white";
        }
    }
    localStorage.setItem("theme", theme);
}