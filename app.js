const radios = [
    {
        "name": "Válassz rádiót",
        "id": "logo",
        "audio": "",
        "website": "/radio",
        "lang": 0
    },
    {
        "name": "Best - Dance Radio",
        "id": "best-dance",
        "audio": "https://sonic1-rbx.cloud-center.ro/8018/;",
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
        "name": "Rádió GaGa - Marosszék",
        "id": "gaga-ms",
        "audio": "https://securestreams4.autopo.st:1696/live",
        "website": "https://radiogaga.ro",
        "lang": "hu"
    },
    {
        "name": "Rádió GaGa - Príma Rádió",
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

const holidays = [
    { name: "Normal", color:"rgb(0, 70, 10)", text:"rgb(95, 210, 35)"},
    { name: "Halloween", color:"rgb(65, 28, 0)", text:"#d72d1e"},
    { name: "Christmas", color:"#165b33", text:"#fff9"}
];

const mediaAPI = ('mediaSession' in navigator);
const player = document.getElementById("audio");
let param = window.location.search;
let theme = null;
let Hday = 2;
let focused = -1;
let nowPlaying = 0;
let favorites = [];
let iceMetadata = null;
console.log("ESZKOZ ADATOK: \n\t" + navigator.userAgent);
initPage();

// ~~~~~~ OLDAL BETOLTESE ~~~~~~

function initPage() {

    if (localStorage.getItem("mode")) {
        document.getElementById("theme-selector").value = localStorage.getItem("mode");
        themeSwitch();
    }

    if (Hday) holidaySet(holidays[Hday]);

    if (localStorage.getItem("favs")) {
        let string = localStorage.getItem("favs");
        const arr = string.split(',');
        arr.pop();
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < radios.length; j++) {
                if (radios[j].id === arr[i]) {
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

    if(param !== ""){
        const params = new URLSearchParams(param);
        if(params.has("s")){
            const radio = params.get("s");
            if(radio == "last" && localStorage.getItem("lastStation")) radioSelect(Number(localStorage.getItem("lastStation")));
            else{
                if(radio == "fav" && favorites.length > 0) radioSelect(favorites[0]);
                else{
                    for(let i=0; i<radios.length; i++){
                        if(radios[i].id === radio) {
                            radioSelect(i);
                            break;
                        }
                    }
                }
            }
        }
    }

    if (localStorage.getItem("autoplay")) {
        document.getElementById("autoplay").checked = true;
        if (!nowPlaying)radioSelect(Number(localStorage.getItem("lastStation")));
    }

    if (!localStorage.getItem("metadata")) {
        document.getElementById("metadata").checked = true;
    }

    if (localStorage.getItem("networkHelper")) {
        document.getElementById("networkHelper").checked = true;
        networkHelper();
    }

    createRadioList();
    settingsInit();
}

function createRadioList() {
    for (let i = 1; i < radios.length; i++) {
        let image = document.createElement('img');
        image.src = "img/stations/" + radios[i].id + ".png";
        image.onerror = function () {
            this.src = "img/maskable-grey.svg";
        };
        image.alt = radios[i].name + " logo";
        image.classList.add("radio-list-button-logo");
        let button = document.createElement('button');
        button.appendChild(image);
        let text = document.createElement('span');
        text.innerText = " " + radios[i].name;
        text.style.verticalAlign = "middle";
        text.style.marginLeft = "5px";
        button.appendChild(text);
        button.classList.add("radio-list-button");
        button.onclick = function () {
            radioSelect(i);
        }
        if (radios[i - 1].lang === "hu" && radios[i].lang !== "hu") document.getElementById("radio-list").appendChild(document.createElement('hr'));
        document.getElementById("radio-list").appendChild(button);
    }
}

function mediaSessionInit() {
    navigator.mediaSession.metadata = new MediaMetadata();
    navigator.mediaSession.metadata.artist = "Saját Rádió";
    navigator.mediaSession.metadata.title = "Saját Rádió";
    navigator.mediaSession.metadata.artwork = [{src: "radio/img/apple-touch.png", sizes: '180x180', type: 'image/png'}, {src:"radio/img/maskable-icon.png", sizes:'512x512', type:'image/png'}];
    navigator.mediaSession.setActionHandler('pause',() => {
        player.pause();
    });
    navigator.mediaSession.setActionHandler('play',() => {
        player.play();
    });
    navigator.mediaSession.setActionHandler('nexttrack', () => {
        if (favorites.length !== 0) {
            let i;
            for (i = 0; i < favorites.length; i++) {
                if (favorites[i] === nowPlaying) {
                    if (i === favorites.length - 1) radioSelect(favorites[0]);
                    else radioSelect(favorites[i + 1]);
                    break;
                }
            }
            if (i === favorites.length) radioSelect(favorites[0]);
        }
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
        if (favorites.length !== 0) {
            let i;
            for (i = 0; i < favorites.length; i++) {
                if (favorites[i] === nowPlaying) {
                    if (i === 0) radioSelect(favorites[favorites.length - 1]);
                    else radioSelect(favorites[i - 1]);
                    break;
                }
            }
            if (i === favorites.length) radioSelect(favorites[i - 1]);
        }
    });
}

function radioSelect(selected) {
    if(!selected) return;
    document.getElementById("song-info").innerText = "";
    document.getElementById("now-playing").style.display = "none";
    let selectedLogo = "img/stations/" + radios[selected].id + ".png";
    player.src = radios[selected].audio;
    if (!navigator.onLine) {
        alert("Nincs internetkapcsolat!");
    } else {
        let playPromise = player.play();
        if (playPromise !== undefined) {
            playPromise.then(function () {
                localStorage.setItem("lastStation", selected);
                if (mediaAPI && navigator.mediaSession.metadata == null) {
                    mediaSessionInit();
                    navigator.mediaSession.metadata.title = radios[selected].name;
                    navigator.mediaSession.metadata.artist = "Saját Rádió";
                    navigator.mediaSession.metadata.artwork = [{src: selectedLogo}, {src: "img/stations/logo.png"}];
                }
                if(document.getElementById("metadata").checked) getMetadata(selected);
            })
                .catch(function () {
                    if (radios[selected].audio[4] !== 's') {
                        if (favorites.length === 0) alert("Ez a rádió csak új ablakban indul el!");
                        window.open(radios[selected].audio, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,height=100px,width=400px');
                        console.log("HTTP Play promise rejected");
                    }
                });
        }
        if(mediaAPI && navigator.mediaSession.metadata) {
            navigator.mediaSession.metadata.title = radios[selected].name;
            navigator.mediaSession.metadata.artist = "Saját Rádió";
            navigator.mediaSession.metadata.artwork = [{src: selectedLogo}, {src: "img/stations/logo.png"}];
        }
    }

    document.getElementById("radio-title").innerText = radios[selected].name;
    document.getElementById("big-logo").src = selectedLogo;
    document.getElementById("big-logo").onerror = function () {
        this.src = "img/maskable-grey.svg";
    };
    document.getElementById("big-logo").alt = radios[selected].name + " logo";
    nowPlaying = selected;

    updateFavicon();
    try{
        document.getElementById("contentID").scrollTo({top: 0, behavior: 'smooth'});
        window.scrollTo({top: 0, behavior: 'smooth'});
    }catch(err) {
        window.scrollTo(0,0);
    }
    castSetStream();
}

function openPage() {
    if (!nowPlaying) return;
    window.open(radios[nowPlaying].website, "_blank");
}

// ~~~~~~~~ ALBUM ADATOK LEKERESE ~~~~~~~~~

function getMetadata(selected){
    let p = document.getElementById("song-info");

    const onStats = (stats) => {
        let titleTmp = p.innerText;
        if(stats.sevenhtml != undefined){
            let text = correctEncoding(stats.sevenhtml[0].StreamTitle);
            p.innerText = text;
        }
        if(stats.icestats != undefined){
            for(let i=0; i<stats.icestats.source.length; i++){
                let slash = radios[selected].audio.lastIndexOf('/') - radios[selected].audio.length;
                if(stats.icestats.source[i].listenurl.slice(slash) == radios[selected].audio.slice(slash)) p.innerText = stats.icestats.source[i].title;
            }
        }
        if(stats.icy != undefined) p.innerText = stats.icy.StreamTitle;
        if (p.innerText == "undefined") p.innerText = "";
        if(titleTmp != p.innerText && p.innerText != "") formatMetadata(p.innerText);
    };

    if(iceMetadata) iceMetadata.stop();
    iceMetadata = new IcecastMetadataStats(
        radios[selected].audio,
        { onStats, sources: ["icy", "sevenhtml", "icestast"] }
    );

    iceMetadata.getSevenhtml().then(function(rsp){
        if(rsp.sevenhtml != undefined){
            iceMetadata = new IcecastMetadataStats(
                radios[selected].audio,
                { onStats, sources: ["sevenhtml"] }
            );
        iceMetadata.start();
        } else iceMetadata.getIcestats().then(function(rsp){
            if(rsp.icestats != undefined){
                iceMetadata = new IcecastMetadataStats(
                    radios[selected].audio,
                    { onStats, sources: ["icestats"] }
                );
            iceMetadata.start();
            } else iceMetadata.getIcyMetadata().then(function(rsp){
                if(rsp.icy != undefined){
                    iceMetadata = new IcecastMetadataStats(
                        radios[selected].audio,
                        { onStats, sources: ["icy"] }
                    );
                iceMetadata.start();
                }
            });
        });
    });
}

function correctEncoding(text){
    if(text.includes('Ă')){
        text = text.replaceAll(/Ăˇ/g, 'á');
        text = text.replaceAll(/Ăł/g, 'ó');
        text = text.replaceAll(/Ă©/g, 'é');
        text = text.replaceAll(/Ăş/g, 'ú');
        text = text.replaceAll(/Ă­/g, 'í');
        text = text.replaceAll(/Ă±/g, 'ñ');
        text = text.replaceAll(/Ă«/g, 'ë');
    }
    t = document.createElement('p');
    t.innerHTML = text;
    text = t.innerText;
    return text;
}

function formatMetadata(data){
    document.getElementById("now-playing").style.display="block";
    let minus = data.indexOf(" - ");
    if (minus != -1) {
        let title = data.slice(minus+3 - data.length).replaceAll('&',"%26");
        let artist = data.substring(0, minus);
        let regx = /(\s([/x]|f(ea)?t\.?)\s|,\s)/gi;
        let formatedArtist = artist.split(regx)[0];
        console.log("Most szol: " + title + " + " + formatedArtist);
        getArtwork(title, formatedArtist);
    } else{
        document.getElementById("big-logo").src = "img/stations/" + radios[nowPlaying].id + ".png";
    }
    if(mediaAPI && navigator.mediaSession.metadata){
        navigator.mediaSession.metadata.title = data;
        navigator.mediaSession.metadata.artist = radios[nowPlaying].name + " - Saját Rádió";
    }
}

function getArtwork(title, artist){
    let nonWord = title.search(/[\s][^\w\s%][\w]/);
    fetch('https://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=6f68ff8bedf80e4d0b42e7db4598f38a&artist=' + artist + '&album=' + title + '&autocorrect=1&format=json')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let url = JSON.stringify(response.album.image[3]).substring(30, JSON.stringify(response.album.image[3]).length - 2);
            if(url != "") {
                document.getElementById("big-logo").src = url;
                if(mediaAPI && navigator.mediaSession.metadata){
                    navigator.mediaSession.metadata.artwork = [{src: url, sizes:'300x300'}];
                }
            }
            else {
                if( nonWord > -1) {
                    let newTitle = title.substring(0, nonWord);
                    setTimeout(function(){ getArtwork(newTitle, artist); }, 500);
                } else getArtworkByTitle(title, artist);
            }
        }).catch(function(){
            if( nonWord > -1) {
                let newTitle = title.substring(0, nonWord);
                setTimeout(function(){ getArtwork(newTitle, artist); }, 500);
            } else getArtworkByTitle(title, artist);
        })
}

function getArtworkByTitle(title, artist) {
    fetch('https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=6f68ff8bedf80e4d0b42e7db4598f38a&artist=' + artist + '&track=' + title + '&autocorrect=1&format=json')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let url = JSON.stringify(response.track.album.image[2]).substring(10, JSON.stringify(response.track.album.image[2]).length - 17);
            if(url != "") {
                document.getElementById("big-logo").src = url;
                if(mediaAPI && navigator.mediaSession.metadata) navigator.mediaSession.metadata.artwork = [{src: url, sizes: '174x174'}];
            } else{
                console.log("Nincs albumborito talalat a zeneszamra");
                document.getElementById("big-logo").src = "img/stations/" + radios[nowPlaying].id + ".png";
                navigator.mediaSession.metadata.artwork = [{src: "img/stations/"+radios[nowPlaying].id+".png"}, {src: "img/stations/logo.png"}];
            }
        }).catch(function(){
            console.log("Nincs albumborito talalat a zeneszamra");
            document.getElementById("big-logo").src = "img/stations/" + radios[nowPlaying].id + ".png";
            navigator.mediaSession.metadata.artwork = [{src: "img/stations/"+radios[nowPlaying].id+".png"}, {src: "img/stations/logo.png"}];
        })
}

// ~~~~~ KEDVENCEK FUNKCIOI ~~~~~

function updateFavicon() {
    if (favorites.includes(nowPlaying)) {
        document.getElementById("star-icon").src = "img/star-filled.png";
    } else {
        document.getElementById("star-icon").src = "img/star.png";
    }
}

function favoriteSwitch() {
    if (!nowPlaying) return;
    if (favorites.includes(nowPlaying)) {
        removeFromFavorites(nowPlaying);
    } else {
        addToFavorites(nowPlaying);
    }
    updateFavicon();
}

function addToFavorites(nr) {
    favorites.push(nr);
    let string = "";
    for (let i = 0; i < favorites.length; i++) {
        string += radios[favorites[i]].id + ',';
    }
    localStorage.setItem("favs", string);
    updateFavList();
}

function removeFromFavorites(nr) {
    const fav2 = [];
    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] !== nr) fav2.push(favorites[i]);
    }
    favorites = fav2;
    let string = "";
    for (let i = 0; i < favorites.length; i++) {
        string += radios[favorites[i]].id + ',';
    }
    localStorage.setItem("favs", string);
    updateFavList();
}

function updateFavList() {
    document.getElementById("favorites").innerHTML = "<h1 class=\"section-title\"> Kedvencek </h1>";
    for (let i = 0; i < favorites.length; i++) {
        let button = document.createElement("button");
        let image = document.createElement("img");
        image.src = "img/stations/" + radios[favorites[i]].id + ".png";
        image.alt = radios[favorites[i]].name;
        image.classList.add("favorite-logo");
        button.classList.add("favorite-button");
        button.appendChild(image);
        button.onclick = function () {
            radioSelect(favorites[i]);
        }
        document.getElementById("favorites").appendChild(button);
    }
}

// ~~~~~ HALOZATI STABILITAS ~~~~~

function networkHelper() {

    let offlineTimeout = null;
    let networkTimeout = null;

    function retryPlaying() {
        if(nowPlaying) setTimeout(function () {
            player.src = radios[nowPlaying].audio;
            player.load();
            player.play();
        }, 500);
    }

    function deleteNetworkTimeout() {
        if (networkTimeout) {
            clearInterval(networkTimeout);
            networkTimeout = null;
            console.log("NetworkHelper: timeout unset");
        }
    }
    function deleteOfflineTimeout(){
        if(offlineTimeout && !player.error){
            clearTimeout(offlineTimeout);
            offlineTimeout = null;
            console.log("NetworkHelper: deleted offline timeout");
        }
    }

    player.addEventListener('waiting', function () {
        if (player.readyState === 2) {
            console.log("NetworkHelper: slow connection timeout set");
            networkTimeout = setInterval(function(){ retryPlaying(); }, 7500);
                setTimeout(function() { deleteNetworkTimeout(); }, 180000);
        }
    });

    player.addEventListener("error", function () {
        if(nowPlaying && player.error.code === 2) retryPlaying();
        if(nowPlaying && player.error.code === 4) {
            if(!offlineTimeout){
                console.log("NetworkHelper: offline timeout set");
                offlineTimeout = setTimeout(function(){
                    nowPlaying = 0;
                    offlineTimeout = null;
                    console.log("NetworkHelper: deleted offline timeout");
                }, 180000);
            }
            setTimeout(function(){ retryPlaying(); }, 5500);
        }
    });
    // ha elindul a lejatszas vagy szuneteltetodik, akkor torlodik az idozito
    player.addEventListener('canplay', function () {
        deleteNetworkTimeout();
        deleteOfflineTimeout();
    });
    player.addEventListener('pause', function () {
        deleteNetworkTimeout();
        deleteOfflineTimeout();
    });
}

// ~~~~~ IDOZITO FUNKCIOK ~~~~~

function timeInput(){
    let str = document.getElementById("timer-input").value;
    if(str === "") ido(0);
    else{
        let s = str.split(':');
        let time = parseInt(s[0])*60 + parseInt(s[1]);
        ido(time);
    }
}

let idozites = [
    null,
    null,
    null
];

function ido(min) {
    if (idozites[0] !== null) {
        clearTimeout(idozites[0]);
        clearInterval(idozites[2]);
    }
    if (min === 0) {
        idozites[0] = null;
        idozites[1] = null;
        idozites[2] = null;
        document.getElementById("timer-input").value = "00:00";
    } else {
        idozites[0] = setTimeout(stopAll, min * 60000);
        idozites[1] = Date.now() + min * 60000;
        idozites[2] = setInterval(countdown, 1000);
    }
}

function stopAll() {
    player.pause();
    clearInterval(idozites[2]);
    idozites[1] = null;
    idozites[2] = null;
    document.getElementById("timer-input").value = "00:00";
}

function countdown() {
    let until = idozites[1] - Date.now();
    document.getElementById("timer-input").value = formatTime(until/1000);
}

function formatTime(sec){
    let seconds = Math.floor(sec % 60);
    let minutes = Math.floor((sec / 60) % 60);
    let hours = Math.floor((sec / 3600) % 60);
    let str = "";
    if(hours < 10) str += "0";
    str += hours + ":";
    if(minutes < 10) str += "0";
    str += minutes + ":";
    if(seconds < 10) str += "0";
    str += seconds;
    return str;
}

// ~~~~~ TEMA FUNKCIOK ~~~~~

function themeSwitch() {
    let select = document.getElementById("theme-selector");
    switch (select.value) {
        case "dark":
            theme = "dark";
            break;
        case "light":
            theme = "light";
            break;
        case "auto": {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = "dark";
            else theme = "light";
            break;
        }
        default :
            theme = "auto";
    }
    localStorage.setItem("mode", select.value);
    themeSet();
}

function themeSet() {
    if (theme === "light") {
        document.getElementById("settings").classList.remove("dark-background");
    } else {
        document.getElementById("settings").classList.add("dark-background");
    }
    document.documentElement.style.colorScheme = theme;
}

function holidaySet(hData){
    document.querySelector('meta[name="theme-color"]').setAttribute("content", hData.color);
    document.getElementById("headerID").style.backgroundColor = hData.color;
    document.getElementById("my-radio").style.color = hData.text;
    document.getElementById("settings-icon").src = "img/event-icon.svg";
    document.getElementById("contentID").style.backgroundImage = "url(\"img/event-bg.svg\")";
}

//~~~~~ BEALLITASOK ~~~~~

function settingSwitch() {
    let settings = document.getElementById("settings");
    let settingsIcon = document.getElementById("settings-icon");
    if (settings.style.transform) {
        settings.style.transform = "";
        settingsIcon.style.transform = "rotate(90deg)";
    }
    else {
        settings.style.transform = "translateX(100%)";
        settingsIcon.style.transform = "";
    }
}

function settingsInit() {
    
    window.addEventListener('load', function() {
        if(this.navigator.userAgent.toLowerCase().indexOf("android")>-1){
            window.history.pushState({}, '')
            window.addEventListener('popstate', (event) => {
                toast = this.document.createElement("div");
                toast.classList.add("toast");
                span = this.document.createElement("span");
                span.innerText = "Vissza gomb: leállítás és kilépés\nKezdőlap gomb: lejátszás a háttérben";
                toast.appendChild(span);
                this.document.getElementById("contentID").appendChild(toast);
                setTimeout(function(){
                    toast.style.opacity = '0';
                }, 6500);
                setTimeout(function(){
                    this.document.getElementById("contentID").removeChild(toast);
                }, 7500);
            })
        }
    })

    player.addEventListener('pause', function () {
        if(iceMetadata) iceMetadata.stop();
    });
    
    window['__onGCastApiAvailable'] = function(isAvailable) {
        if (isAvailable) {
            initializeCastApi();
        }
    };
    
    document.addEventListener('keydown', (event) => {
        var code = event.key;
        const keys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", " "];
        if (keys.indexOf(code) == -1) return;
        let focusable = [];
        focusable.push(document.getElementsByTagName("button")[0]);
        if(!settings.style.transform){
            for(let i=0; i<document.getElementsByTagName("select").length; i++){
                focusable.push(document.getElementsByTagName("select")[i]);
            }
            for(let i=0; i<document.getElementsByTagName("input").length; i++){
                focusable.push(document.getElementsByTagName("input")[i]);
            }
        } else{
            for(let i=1; i<document.getElementsByTagName("button").length - 1; i++){
                focusable.push(document.getElementsByTagName("button")[i]);
            }
        }
        switch(code){
            case "ArrowDown", "ArrowRight": {
                event.preventDefault();
                if(focused == -1) focused = 3;
                else if(focused < focusable.length -1) focused++;
                focusable[focused].focus();
                break;
            }
            case "ArrowUp", "ArrowLeft": {
                event.preventDefault();
                if(focused == -1) focused = 3;
                else if(focused > 0) focused--;
                focusable[focused].focus();
                break;
            }
            case " ": {
                event.preventDefault();
                if(player.paused) player.play();
                else player.pause();
                break;
            }
        }
      }, false);
    
    document.getElementById("autoplay").addEventListener("click", function () {
        if (document.getElementById("autoplay").checked) {
            localStorage.setItem("autoplay", true);
        } else {
            localStorage.removeItem("autoplay");
        }
    });

    document.getElementById("metadata").addEventListener("click", function () {
        if (document.getElementById("metadata").checked) {
            localStorage.removeItem("metadata");
        } else {
            localStorage.setItem("metadata", false);
            if(iceMetadata) iceMetadata.stop();
        }
    });

    document.getElementById("networkHelper").addEventListener("click", function () {
        if (!document.getElementById("networkHelper").checked) {
            localStorage.removeItem("networkHelper");
            if(confirm("A beállítás mentéséhez újra kell tölteni az oldalt.")) location.reload();
        } else {
            localStorage.setItem("networkHelper", "true");
            networkHelper();
        }
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (){
        themeSwitch();
    })

}

// ~~~~~~ CHROMECAST BEALLITASOK ~~~~~~

function initializeCastApi (){
    var context = cast.framework.CastContext.getInstance();
    context.setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
    var context = cast.framework.CastContext.getInstance();
    context.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
    function(event) {
        if(event.sessionState == cast.framework.SessionState.SESSION_STARTED){
            castSetStream();
        }
        if(event.sessionState == cast.framework.SessionState.SESSION_ENDED){
            player.load();
            player.play();
        }
    })
};

function castSetStream(){
    try{
        var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
        if(castSession && nowPlaying) {
            var mediaInfo = new chrome.cast.media.MediaInfo(player.src, 'audio/mpeg');
            mediaInfo.metadata = new chrome.cast.media.MusicTrackMediaMetadata();
            mediaInfo.metadata.title = radios[nowPlaying].name;
            mediaInfo.metadata.artist = "Saját Rádió";
            mediaInfo.metadata.images = [{ url: "https://portikszabolcs.github.io/radio/img/stations/"+radios[nowPlaying].id+".png"}, { url: "https://portikszabolcs.github.io/radio/img/stations/logo.png"}];
            var request = new chrome.cast.media.LoadRequest(mediaInfo);
            castSession.loadMedia(request).then(
                function() { console.log('Cast Load succeed');},
                function(errorCode) { console.log('Cast Error code: ' + errorCode); });
            player.pause();
            }
    } catch(error){
        console.log("No cast SDK loaded");
    }
}