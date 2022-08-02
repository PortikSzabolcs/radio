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
}