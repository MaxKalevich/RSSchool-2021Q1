
const PIANO = document.querySelector(".piano"); //querySelector возвращает первый элемент, соответствующий данному CSS-селектору.
const SHARP = document.querySelectorAll(".sharp");
const PIANO_KEY = document.querySelectorAll(".piano-key"); //querySelectorAll возвращает все элементы внутри elem, удовлетворяющие данному CSS селектору.
const buttonLaters = document.querySelector(".btn-letters");
const buttonNotes = document.querySelector(".btn-notes");
const buttonFullScreen = document.querySelector(".fullscreen");

const startAudio = (event) => {
    event.target.classList.add("piano-key-active");
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        console.log(note)
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
};

const stopAudio = (event) => {
    event.target.classList.remove("piano-key-active")
};

const LettersAdd = () => {
    SHARP.forEach(el => el.classList.add("letter"))
    PIANO_KEY.forEach(el => el.classList.add("letter"))
}

const NotesAdd = () => {
    SHARP.forEach(el => el.classList.remove("letter"))
    PIANO_KEY.forEach(el => el.classList.remove("letter"))
}

const startCorrespondOver = (event) => { // кнопки реагируют на наведение мыши
    event.target.classList.add("piano-key-active")
    PIANO_KEY.forEach((el) => {
        el.addEventListener("mouseover", startAudio);
        el.addEventListener("mouseout", stopAudio);
    });
};

const stopCorrespondOver = (event) => { // кнопки реагируют на наведение мыши
    event.target.classList.remove("piano-key-active")
    PIANO_KEY.forEach((el) => {
        el.removeEventListener("mouseover", startAudio, false);
        el.removeEventListener("mouseout", stopAudio);
    });
};

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);
buttonLaters.addEventListener("click", LettersAdd);
buttonNotes.addEventListener("click", NotesAdd);

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

PIANO.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        console.log(note)
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
});


const buttonWrapper = document.querySelector(".btn-container");

buttonWrapper.onclick = function(event) {
    buttonNotes.classList.remove("btn-active")
    let target = event.target;
    highlight(target)
}

let buttonClick;

function highlight(target) {

    if (buttonClick) {
        buttonClick.classList.remove("btn-active");
    }
    buttonClick = target;
    buttonClick.classList.add("btn-active");
}
buttonFullScreen.onclick = function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
    };
}
