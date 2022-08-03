const artworks = [
    { src: "https://www.radio1.hu/wp-content/themes/radio1/assets/dist/logo-150x150.png",   sizes: '150x150',   type: 'image/png' },
    { src: "https://www.radiogaga.ro/wp-content/uploads/2022/04/GaGa_Logo_vilagos_hatterre.png", sizes: '400x400', type: 'image/svg' },
    { src: "https://myonlineradio.hu/public/uploads/radio_img/mr2-petofi-radio/play_250_250.jpg",sizes: '250x250', type: 'image/jpg' },
    { src: "https://retroradio.hu/wp-content/themes/retroradio/assets/dist/img/logo.png", sizes: '150x150', type: 'image/png' },
    { src: "https://myonlineradio.hu/public/uploads/radio_img/star-radio/play_250_250.jpg", sizes: '250x250', type: 'image/jpg' },
    { src: "https://myonlineradio.hu/public/uploads/radio_img/szepviz-radio/play_250_250.jpg", sizes: '250x250', type: 'image/jpg' },
    { src: "https://coolfm.hu/radio/wp-content/uploads/2022/01/log%C3%B3-v%C3%A9gleges_shadow.png", sizes: '150x150', type: 'image/png' },
    { src: "https://mlotgijtlucd.i.optimole.com/w:500/h:500/q:75/rt:fill/g:ce/https://oxys.group/app/oxygen_music_logo%20(1)_juz25g1r.png", sizes: '150x150', type: 'image/png' },
    { src: "https://onlinestream.live/logos/6227.png", sizes: '150x150', type: 'image/png' },
    { src: "https://www.profm.ro/static/theme-repo/bin/images/profm-logo.svg", sizes: '168x232', type: 'image/svg-xml' },
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
    navigator.mediaSession.metadata.artwork = [artworks[playing]];
}