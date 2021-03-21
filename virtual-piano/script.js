const PIANO = document.querySelector(".piano");
const SHARP = document.querySelectorAll(".sharp");
const PIANO_KEY = document.querySelectorAll(".piano-key");
const buttonLetters = document.querySelector(".btn-letters");
const buttonNotes = document.querySelector(".btn-notes");
const buttonFullScreen = document.querySelector(".fullscreen");

const startAudio = (event) => {
    event.target.classList.add("piano-key-active");
    event.target.classList.add("piano-key-active-pseudo");
    if (event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
};

const stopAudio = (event) => {
    event.target.classList.remove("piano-key-active");
};

const LettersAdd = () => {
    SHARP.forEach(el => el.classList.add("letter"));
    PIANO_KEY.forEach(el => el.classList.add("letter"));
}

const NotesAdd = () => {
    SHARP.forEach(el => el.classList.remove("letter"));
    PIANO_KEY.forEach(el => el.classList.remove("letter"));
}

const startCorrespondOver = (event) => {
    event.target.classList.add("piano-key-active");
    event.target.classList.add("piano-key-active-pseudo");
    PIANO_KEY.forEach((el) => {
        el.addEventListener("mouseover", startAudio);
        el.addEventListener("mouseout", stopAudio);
    });
};

const stopCorrespondOver = (event) => {
    event.target.classList.remove("piano-key-active");
    PIANO_KEY.forEach((el) => {
        el.removeEventListener("mouseover", startAudio, false);
        el.removeEventListener("mouseout", stopAudio);
    });
};

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);
buttonLetters.addEventListener("click", LettersAdd);
buttonNotes.addEventListener("click", NotesAdd);

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

PIANO.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
});

const buttonWrapper = document.querySelector(".btn-container");

buttonWrapper.onclick = function (event) {
    buttonNotes.classList.remove("btn-active");
    let target = event.target;
    backlight(target);
}

let buttonClick;

function backlight(target) {
    if (buttonClick) {
        buttonClick.classList.remove("btn-active");
    }
    buttonClick = target;
    buttonClick.classList.add("btn-active");
}

buttonFullScreen.onclick = function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};

const keywordsDown = (event) => {
    PIANO_KEY.forEach(el => {
        let repeat = event.repeat;
        if (repeat) {
            return false
        }
        let data = el.dataset.letter;
        let eventCode = event.code[3];
        if (eventCode === data) {
            el.classList.add("piano-key-active");
        }
        if (eventCode === data) {
            const note = el.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
        }
    });
}

const keywordsUp = (event) => {
    PIANO_KEY.forEach(el => {
        let data = el.dataset.letter;
        let eventCode = event.code[3];
        if (eventCode === data) {
            el.classList.remove("piano-key-active");
        }
    });
}

window.addEventListener("keydown", keywordsDown);
window.addEventListener("keyup", keywordsUp);
