const radiosOld = [
    { id: "logo"},
    { id: "radio1"},
    { id: "gaga"},
    { id: "petofi"},
    { id: "retro"},
    { id: "msvradio"},
    { id: "szepvizfm"},
    { id: "coolfm"},
    { id: "oxygen"},
    { id: "best-dance"},
    { id: "profm"},
    { id: "kissfm"},
    { id: "onefm"},
    { id: "impuls"},
    { id: "dancefm"},
    { id: "digifm"},
    { id: "zum"},
    { id: "europafm"},
    { id: "rockfm"},
    { id: "magicfm"},
    { id: "kiss-pop"},
    { id: "kiss-energy"},
];

const radios = [
    {
        "name": "Válassz rádiót",
        "id": "logo",
        "audio": "",
        "website": "/radio",
        "lang": 0
    },
    {
        "name": "Best-Dance Radio",
        "id": "best-dance",
        "audio": "https://ssl.omegahost.ro/8088/;",
        "website": "https://best-dance.ro",
        "lang": "hu"
    },
    {
        "name": "Best FM - Budapest",
        "id": "bestfm",
        "audio": "https://icast.connectmedia.hu/5101/live.mp3/",
        "website": "https://bestfm.hu/",
        "lang": "hu"
    },
    {
        "name": "City Rádió",
        "id": "city",
        "audio": "https://mscp1.gazduireradio.ro/cityradio",
        "website": "https://www.city-radio.ro/",
        "lang": "hu"
    },
    {
        "name": "Cool FM",
        "id": "coolfm",
        "audio": "https://mediagw.e-tiger.net/stream/coolfm",
        "website": "https://coolfm.hu",
        "lang": "hu"
    },
    {
        "name": "Kossuth Rádió",
        "id": "kossuth",
        "audio": "https://icast.connectmedia.hu/4736/mr1.mp3",
        "website": "https://mediaklikk.hu/kossuth",
        "lang": "hu"
    },
    {
        "name": "Marosvásárhelyi Rádió",
        "id": "msvradio",
        "audio": "http://stream2.srr.ro:8312/;",
        "website": "https://www.marosvasarhelyiradio.ro/",
        "lang": "hu"
    },
    {
        "name": "Mercy Mulatós Rádió",
        "id": "mercy",
        "audio": "http://stream.mercyradio.eu/mulatos.mp3",
        "website": "https://mercyradio.eu/",
        "lang": "hu"
    },
    {
        "name": "Oxygen Music",
        "id": "oxygen",
        "audio": "https://oxygenmusic.hu:8000/oxygenmusic_128",
        "website": "https://oxygenmusic.hu/csatorna",
        "lang": "hu"
    },
    {
        "name": "Petőfi Rádió",
        "id": "petofi",
        "audio": "https://icast.connectmedia.hu/4738/mr2.mp3",
        "website": "https://petofilive.hu",
        "lang": "hu"
    },
    {
        "name": "Rádió 1",
        "id": "radio1",
        "audio": "https://icast.connectmedia.hu/5202/live.mp3",
        "website": "https://radio1.hu",
        "lang": "hu"
    },
    {
        "name": "Rádió Gaga - Maros",
        "id": "gaga-ms",
        "audio": "https://securestreams4.autopo.st:1696/live",
        "website": "https://radiogaga.ro",
        "lang": "hu"
    },
    {
        "name": "Rádió Gaga - Príma Rádió",
        "id": "gaga",
        "audio": "https://securestreams5.autopo.st:1992/player",
        "website": "https://radiogaga.ro",
        "lang": "hu"
    },
    {
        "name": "Retró Rádió",
        "id": "retro",
        "audio": "https://icast.connectmedia.hu/5001/live.mp3",
        "website": "https://retroradio.hu",
        "lang": "hu"
    },
    {
        "name": "Rocker Rádió",
        "id": "rocker",
        "audio": "https://radio.ch3.hu:8200/rocker.mp3",
        "website": "https://rockerradio.online/kezdolap/",
        "lang": "hu"
    },
    {
        "name": "Szépvíz FM",
        "id": "szepvizfm",
        "audio": "https://stream2.rdstrm.com/szepviz-radio.mp3",
        "website": "http://myonlineradio.hu/szepviz-radio",
        "lang": "hu"
    },
    {
        "name": "One World Radio",
        "id": "one-world",
        "audio": "https://22193.live.streamtheworld.com/OWR_DABAAC.aac",
        "website": "https://www.tomorrowland.com/home/radio",
        "lang": "ro-en"
    },
    {
        "name": "Asha Radio",
        "id": "asha",
        "audio": "https://live.asha.ro/asha",
        "website": "https://asha.ro",
        "lang": "ro"
    },
    {
        "name": "Dance FM",
        "id": "dancefm",
        "audio": "https://edge126.rcs-rds.ro/profm/dancefm.mp3",
        "website": "https://dancefm.ro",
        "lang": "ro"
    },
    {
        "name": "Digi FM",
        "id": "digifm",
        "audio": "https://edge76.rcs-rds.ro/digifm/digifm.mp3",
        "website": "https://digifm.ro",
        "lang": "ro"
    },
    {
        "name": "Europa FM",
        "id": "europafm",
        "audio": "https://astreaming.edi.ro:8443/EuropaFM_aac",
        "website": "https://europafm.ro",
        "lang": "ro"
    },
    {
        "name": "Kiss - Energy",
        "id": "kiss-energy",
        "audio": "https://live.kissfm.ro/kiss.energy",
        "website": "https://soundis.ro/kissenergy/",
        "lang": "ro"
    },
    {
        "name": "Kiss - Pop",
        "id": "kiss-pop",
        "audio": "https://live.kissfm.ro/kiss.xtra",
        "website": "https://soundis.ro/kisspop/",
        "lang": "ro"
    },
    {
        "name": "Kiss FM",
        "id": "kissfm",
        "audio": "https://live.kissfm.ro/kissfm.aacp",
        "website": "https://kissfm.ro",
        "lang": "ro"
    },
    {
        "name": "Magic FM",
        "id": "magicfm",
        "audio": "https://live.magicfm.ro/magicfm.aacp",
        "website": "https://magicfm.ro",
        "lang": "ro"
    },
    {
        "name": "One FM",
        "id": "onefm",
        "audio": "https://live.onefm.ro/onefm.aacp",
        "website": "https://onefm.ro",
        "lang": "ro"
    },
    {
        "name": "ProFM",
        "id": "profm",
        "audio": "https://edge126.rcs-rds.ro/profm/profm.mp3",
        "website": "https://profm.ro",
        "lang": "ro"
    },
    {
        "name": "Radio Impuls",
        "id": "impuls",
        "audio": "https://live.radio-impuls.ro/stream",
        "website": "https://radioimpuls.ro",
        "lang": "ro"
    },
    {
        "name": "Radio ZUM",
        "id": "zum",
        "audio": "https://stream.radiozum.md/live",
        "website": "https://radiozum.md",
        "lang": "ro"
    },
    {
        "name": "Rock FM",
        "id": "rockfm",
        "audio": "https://live.rockfm.ro/rockfm.aacp",
        "website": "https://rockfm.ro",
        "lang": "ro"
    },
    {
        "name": "Virgin Radio",
        "id": "virgin",
        "audio": "https://astreaming.edi.ro:8443/VirginRadio_aac",
        "website": "https://virginradio.ro",
        "lang": "ro"
    }
];

const mediaAPI = ('mediaSession' in navigator);
const player = document.getElementById("audio");
let theme = null;
let nowPlaying = 0;
let favorites = [];
console.log("ESZKOZ ADATOK: \n\t" + navigator.userAgent);
initPage();

function initPage() {

    if (localStorage.getItem("theme") === "white") {
        theme = "white";
        themeSet();
    }

    if (localStorage.getItem("favorites")) {
        updateOldFavorites();
    }
    if(localStorage.getItem("favs")){
        let string = localStorage.getItem("favs");
        const arr = string.split(',');
        arr.pop();
        for (let i = 0; i < arr.length; i++) {
            for(let j=0; j<radios.length; j++){
                if(radios[j].id === arr[i]){
                    favorites.push(j);
                    break;
                }
            }
        }
        updateFavList();
    } else {
        let text = document.createElement('p');
        text.style.padding = "20px";
        text.style.fontSize = "12px";
        text.innerText = "Kedvencek hozzáadásához kattints a rádióra, majd a csillag ikonra.";
        document.getElementById("favorites").appendChild(text);
    }

    if (localStorage.getItem("lastStation")) {
        document.getElementById("autoplay").checked = true;
        radioSelect(Number(localStorage.getItem("lastStation")));
    }

    createRadioList();
    networkHelperInit();

    document.getElementById("autoplay").addEventListener("click", function () {
        if (document.getElementById("autoplay").checked) {
            localStorage.setItem("lastStation", nowPlaying);
        } else {
            localStorage.removeItem("lastStation");
        }
    });
}

function createRadioList(){
    for(let i=1; i<radios.length; i++){
        let image = document.createElement('img');
        image.src = "img/stations/" + radios[i].id + ".png";
        image.onerror = function (){
            this.src = "img/apple-touch.png";
        };
        image.alt = radios[i].name + " logo";
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
        if(radios[i-1].lang === "hu" && radios[i].lang !== "hu") document.getElementById("radioList").appendChild(document.createElement('hr'));
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
    let selectedLogo = "img/stations/" + radios[selected].id + ".png";
    player.src = radios[selected].audio;
    if (!navigator.onLine) {
        alert("Nincs internetkapcsolat!");
    } else {
        let playPromise = player.play();
        if(playPromise !== undefined){
            playPromise.then(function (){
                if(document.getElementById("autoplay").checked) localStorage.setItem("lastStation", selected);
                if(mediaAPI){
                    if(navigator.mediaSession.metadata == null) mediaSessionInit();
                    navigator.mediaSession.metadata.title = radios[selected].name;
                    navigator.mediaSession.metadata.artwork = [{src: selectedLogo}, {src: "img/stations/logo.png"}];
                }
            })
                .catch(function () {
                    if(radios[selected].audio[4] !== 's') {
                        if (favorites.length === 0) alert("Ez a rádió csak új ablakban indul el!");
                        window.open(radios[selected].audio, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,height=100px,width=400px');
                        console.log("HTTP Play promise rejected");
                    }
                });
        }
    }

    document.getElementById("radio-title").innerText = radios[selected].name;
    document.getElementById("big-logo").src = selectedLogo;
    document.getElementById("big-logo").onerror = function (){
        this.src = "img/apple-touch.png";
    };
    document.getElementById("big-logo").alt = radios[selected].name + " logo";
    nowPlaying = selected;

    updateFavicon();
}

function openPage(){
    if(!nowPlaying) return;
    window.open(radios[nowPlaying].website, "_blank");
}

// ~~~~~ KEDVENCEK FUNKCIOK ~~~~~
function updateOldFavorites(){
    let string = localStorage.getItem("favorites");
    const arr = string.split(',');
    arr.pop();
    let updated = "";
    for (let i = 0; i < arr.length; i++) {
        updated += radiosOld[Number(arr[i])].id + ",";
        localStorage.setItem("favs", updated);
    }
    localStorage.removeItem("favorites");
}

function updateFavicon(){
    if(favorites.includes(nowPlaying)){
        document.getElementById("star-icon").src = "img/star-filled.png";
    } else {
        document.getElementById("star-icon").src = "img/star.png";
    }
}

function favoriteSwitch() {
    if(!nowPlaying) return;
    if(favorites.includes(nowPlaying)){
        removeFromFavorites(nowPlaying);
    } else{
        addToFavorites(nowPlaying);
    }
    updateFavicon();
}

function addToFavorites(nr){
    favorites.push(nr);
    let string = "";
    for(let i=0; i<favorites.length; i++){
        string += radios[favorites[i]].id + ',';
    }
    localStorage.setItem("favs", string);
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
        string += radios[favorites[i]].id + ',';
    }
    localStorage.setItem("favs", string);
    updateFavList();
}

function updateFavList(){
    document.getElementById("favorites").innerHTML = "<h1> Kedvencek </h1>";
        for (let i = 0; i < favorites.length; i++) {
            let button = document.createElement("button");
            let image = document.createElement("img");
            image.src = "img/stations/" + radios[favorites[i]].id + ".png";
            image.alt = radios[favorites[i]].name;
            image.classList.add("favoriteLogo");
            button.classList.add("favoriteButton");
            button.appendChild(image);
            button.onclick = function () {
                radioSelect(favorites[i]);
            }
            document.getElementById("favorites").appendChild(button);
        }
}
// ~~~~~ HALOZATI STABILITAS ~~~~~
function networkHelperInit(){

    let networkTimeout = null;

    function retryPlaying(){
        setTimeout(function (){
            player.load();
            player.play();
        }, 500);
    }

    function deleteNetworkTimeout(){
        if(networkTimeout) {
            clearInterval(networkTimeout);
            networkTimeout = null;
            console.log("timeout unset!");
            return true;
        }
        return false;
    }
    function deleteOfflineTimeout(){
        if(window.ononline) {
            if (player.networkState !== 1) {
                window.ononline = null;
                console.log("removed event listener for online");
            } else {
                setTimeout(function () {
                    window.ononline = null;
                    console.log("deleted event listener for online");
                }, 150000);
            }
        }
    }

    window.addEventListener("offline", function (){
        if(!player.paused) {
            window.ononline = retryPlaying;
            console.log("added event listener for online");
        }
    });

    player.addEventListener('waiting',function () {
        if(player.readyState === 2 && navigator.onLine){
            console.log("slow connection timeout set!");
            networkTimeout = setInterval(function (){
                if(navigator.onLine) retryPlaying();
                else deleteNetworkTimeout();
            }, 7500);
            setTimeout(deleteNetworkTimeout, 180000);
        }
    });

    // ha elindul a lejatszas vagy szuneteltetodik, akkor torlodik az idozito
    player.addEventListener('canplay', function (){
        deleteNetworkTimeout();
        deleteOfflineTimeout();
    });
    player.addEventListener('pause', function (){
        deleteNetworkTimeout();
        deleteOfflineTimeout();
    });
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
    player.pause();
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
        document.documentElement.style.colorScheme = "normal";
    } else{
        document.body.style.backgroundImage = "linear-gradient(#020, black)";
        document.body.style.color = "white";
        document.documentElement.style.colorScheme = "dark";
    }
    localStorage.setItem("theme", theme);
}