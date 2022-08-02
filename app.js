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


if('mediaSession' in navigator){
    navigator.mediaSession.metadata = new MediaMetadata();
    navigator.mediaSession.metadata.artist = "Saját Rádió";
    navigator.mediaSession.metadata.title = "Saját Rádió";
    navigator.mediaSession.setActionHandler('nexttrack', () => {
        let id = 0;
        let max = document.getElementsByTagName('audio').length;
        while(id < max){
            if(!document.getElementsByTagName('audio')[id].paused){
                document.getElementsByTagName('audio')[id].pause();
                if(id < max-1){
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
    document.getElementsByTagName('audio')[i].addEventListener("play", function () {
        stopAll(i);
    });
}

function stopAll(playing) {
    for (let i = 0; i < document.getElementsByTagName('audio').length; i++) {
        if (i !== playing) {
            document.getElementsByTagName('audio')[i].pause();
        }
    }
    navigator.mediaSession.metadata.title = nevek[playing];
}