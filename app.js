const artworks = [
    { src: "https://radio1.hu/wp-content/themes/radio1/assets/dist/img/favicon/android-icon-192x192.png",   sizes: '192x192',   type: 'image/png' },
    { src: "https://www.radiogaga.ro/wp-content/uploads/2022/04/GaGa_Logo_vilagos_hatterre.png", sizes: '400x400', type: 'image/svg' },
    { src: "https://myonlineradio.hu/public/uploads/radio_img/mr2-petofi-radio/play_250_250.jpg",sizes: '250x250', type: 'image/jpg' },
    { src: "https://retroradio.hu/wp-content/themes/retroradio/assets/dist/img/logo.png", sizes: '150x150', type: 'image/png' },
    { src: "https://myonlineradio.hu/public/uploads/radio_img/star-radio/play_250_250.jpg", sizes: '250x250', type: 'image/jpg' },
    { src: "https://myonlineradio.hu/public/uploads/radio_img/szepviz-radio/play_250_250.jpg", sizes: '250x250', type: 'image/jpg' },
    { src: "https://coolfm.hu/radio/wp-content/uploads/2022/01/log%C3%B3-v%C3%A9gleges_shadow.png", sizes: '150x150', type: 'image/png' },
    { src: "https://mlotgijtlucd.i.optimole.com/w:500/h:500/q:75/rt:fill/g:ce/https://oxys.group/app/oxygen_music_logo%20(1)_juz25g1r.png", sizes: '150x150', type: 'image/png' },
    { src: "https://onlinestream.live/logos/6227.png", sizes: '150x150', type: 'image/png' },
    { src: "https://www.profm.ro/static/theme-repo/apple-touch-icon.png?v=2.0", sizes: '180x180', type: 'image/jpg' },
    { src: "https://www.kissfm.ro/assets/logo/kissfm-inverted.svg", sizes: '320x320', type: 'image/svg-xml' },
    { src: "https://www.onefm.ro/img/onefm-logo.png", sizes: '150x150', type: 'image/png' },
    { src: "https://www.radioimpuls.ro/img/logo.png", sizes: '250x147', type: 'image/png' },
    { src: "https://media.bauerradio.com/image/upload/c_crop,g_custom/v1654680540/brand_manager/stations/izmrlrpemwn1bcz1fmsq.png", sizes: '150x150', type: 'image/png' },
    { src: "https://media.bauerradio.com/image/upload/c_crop,g_custom/v1632817490/brand_manager/stations/tuqf9sdyjdymmf0dqifh.jpg", sizes: '150x150', type: 'image/jpg' }
];

const nevek = [
    "Rádió 1",
    "Rádió Gaga",
    "Petőfi Rádió",
    "Retró Rádió",
    "Star Rádió",
    "Szépvíz FM",
    "Cool FM",
    "Oxigen Music",
    "Best-Dance Radio",
    "ProFM",
    "Kiss FM",
    "One FM",
    "Radio Impuls",
    "Kiss Pop",
    "Kiss Energy"
];

const mediaAPI = ('mediaSession' in navigator);
let lastOnline = null;
let theme = null;
if(localStorage.getItem("theme") === "white") {
    theme = localStorage.getItem("theme");
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


function mediaSessionInit(){
    navigator.mediaSession.metadata = new MediaMetadata();
    navigator.mediaSession.metadata.artist = "Saját Rádió";
    navigator.mediaSession.metadata.title = "Saját Rádió";
    navigator.mediaSession.metadata.artwork = [ { src: "/img/apple-touch.png", sizes: '192x192', type: 'image/png'} ];
    navigator.mediaSession.setActionHandler('nexttrack', () => {
        let id = 0;
        let max = document.getElementsByTagName('audio').length;
        while(id < max){
            if(!document.getElementsByTagName('audio')[id].paused){
                document.getElementsByTagName('audio')[id].pause();
                if(id < max-1){
                    if(id === 3) id++;
                    document.getElementsByTagName('audio')[id+1].play();
                }
                else{
                    document.getElementsByTagName('audio')[0].play();
                }
                break;
            }
            ++id;
        }
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
        let id = 0;
        let max = document.getElementsByTagName('audio').length;
        while(id < max){
            if(!document.getElementsByTagName('audio')[id].paused){
                document.getElementsByTagName('audio')[id].pause();
                if(id > 0){
                    if(id === 5) id--;
                    document.getElementsByTagName('audio')[id-1].play();
                }
                else{
                    document.getElementsByTagName('audio')[max-1].play();
                }
                break;
            }
            ++id;
        }
    });
}

for (let i = 0; i < document.getElementsByTagName('audio').length; i++) {
    let audio = document.getElementsByTagName('audio')[i];
    audio.addEventListener("play", function () {
        startPlaying(i);
    });
    audio.addEventListener("pause", function () {
        let source = document.getElementsByTagName('audio')[i].src;
        document.getElementsByTagName('audio')[i].src = "";
        document.getElementsByTagName('audio')[i].load();
        document.getElementsByTagName('audio')[i].src = source;
    });
}

function startPlaying(playing) {
    if(mediaAPI){
        if(navigator.mediaSession.metadata == null) mediaSessionInit();
        navigator.mediaSession.metadata.title = nevek[playing];
        navigator.mediaSession.metadata.artwork = [artworks[playing]];
    }
    for (let i = 0; i < document.getElementsByTagName('audio').length; i++) {
        if (i !== playing) {
            document.getElementsByTagName('audio')[i].pause();
        }
    }
}


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
    for(let i=0; i<document.getElementsByTagName('audio').length; i++){
        document.getElementsByTagName('audio')[i].pause();
    }
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

function themeSwitch() {
    if(theme === "white") theme = "black";
    else theme = "white";
    themeSet();
}
function themeSet() {
    if(theme === "white"){
        document.body.style.backgroundColor = "#eeeeee";
        document.getElementById("contentID").className = "content-white";
        document.getElementById("headerID").className = "header-white";
    } else{
        document.body.style.backgroundColor = "black";
        document.getElementById("contentID").className = "content";
        document.getElementById("headerID").className = "header";
    }
    localStorage.setItem("theme", theme);
}