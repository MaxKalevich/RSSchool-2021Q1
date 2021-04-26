// Fullscreen
const buttonFullScreen = document.querySelector(".fullscreen");
buttonFullScreen.onclick = function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// CSS Filters

const inputs = document.querySelectorAll("input[type='range']");

inputs.forEach(input => {
  input.addEventListener("input", handleUpdate);
  let output = document.querySelector(`output[name=${input.name}]`);

  function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    output.value = this.value;
  }
});

// Images

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const btnActive = document.querySelector('.btn-next');
const image = document.querySelector("img");

// Date

let now = new Date();

let hours = now.getHours();
let timesOfDay;

if (hours >= 6 && hours <= 11) {
  timesOfDay = "morning";
} else if (hours >= 12 && hours <= 17) {
  timesOfDay = "day";
} else if (hours >= 18 && hours <= 23) {
  timesOfDay = "evening";
} else if (hours >= 0 && hours <= 5) {
  timesOfDay = "night";
}

console.log(timesOfDay);

const base = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/`;
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
let k = 0;
function viewBgImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    image.src = `${src}`;
  };
}

function getImage() {

  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  k++;
  btnActive.disabled = true;
  setTimeout(function () { btnActive.disabled = false }, 0);
}
btnActive.addEventListener('click', getImage);
btnActive.addEventListener('click', drawImage);

// Canvas

const canvas = document.querySelector('canvas');

inputs.forEach(input => {
  input.addEventListener("input", handle);
  let output = document.querySelector(`output[name=${input.name}]`);

  function handle() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    output.value = this.value;
  }
 
});

// Canvas Filters

let blurEffect = "0px";
let sepiaEffect = "0%";
let invertEffect = "0%";
let saturateEffect = "100%";
let hueEffect = "0deg";

  inputs.forEach(input => input.addEventListener("input", blurValue));
  function blurValue(e) {
    const suffix = this.dataset.sizing || "";
    
      if (e.target.name === "blur") {
       blurEffect = e.target.value + suffix;
      };
     
      if (e.target.name === "sepia") {
        sepiaEffect = e.target.value + suffix;  
       };

      if (e.target.name === "invert") {
        invertEffect = e.target.value + suffix;
       };

       if (e.target.name === "saturate") {
        saturateEffect = e.target.value + suffix;
       };

       if (e.target.name === "hue") {
        hueEffect = e.target.value + suffix;
       };
     
       drawImage(blurEffect, sepiaEffect, invertEffect, saturateEffect, hueEffect);
  }


function drawImage(...rest) {

  let pop = rest[rest.length - 1];
 
  let first = rest.shift();
  let sepia = rest[0];
  let invert = rest[1];
  let saturate = rest[2];
  let hueEffect = rest[3];

  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');

  img.onload = function() {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
 
      ctx.filter = `blur(${first}) invert(${invert}) sepia(${sepia}) saturate(${saturate}) hue-rotate(${hueEffect})`;
console.log(a);
      //ctx.filter = "none;"
    
    
   
  
    

    ctx.drawImage(img, 0, 0);
  };

  img.src = "assets/img/img.jpg";
  
  if (k === 0) {
    img.src = "assets/img/img.jpg";
  } else if (k >= 1 && k <= 9) {
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/0${k}.jpg`;
  } else {
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${k}.jpg`;
  }
  if (k === 21) {
    k = 1;
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/01.jpg`;
  }
  if (k === 100) {
    img.src = pop;
  }
  
}
drawImage();

// Save canvas picture

const dataURL = canvas.toDataURL(`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/01.jpg`); // скачивание canvas на компьютер
const download = document.querySelector(".btn-save");
download.onclick = function (e) {

  let link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
};

// Load picture
 
const btnload = document.querySelector(".btn-load");
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.image-container');

fileInput.addEventListener('change', function (e) {

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;

    imageContainer.src = img.src;
    canvas.src = img.src;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.naturalWidth;
    canvas.naturalHeight;
    realSrc = img.src;
  
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    imageContainer.innerHTML = "";
    imageContainer.append(img);
    realSrc = img.src;
    k = 100;
    drawImage(realSrc);
  }
  reader.readAsDataURL(file);
  fileInput.value = '';
});

// Reset button

const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", clear)
const outputs = document.querySelectorAll("output");

function clear() {
  for (let j = 0; j < inputs.length; j++) {
    resetFilters(inputs[j]);
  }
  function resetFilters(e) {
    const suffix = e.dataset.sizing || "";
    if (e.name === "saturate") {
      outputs[3].textContent = 100;
      e.value = 100;
      blurEffect = "0px";
      document.documentElement.style.setProperty(`--${e.name}`, e.value + suffix);
      outputs[3].textContent = e.value;
    } else {
      e.value = 0;
      document.documentElement.style.setProperty(`--${e.name}`, e.value + suffix);
      outputs[0].textContent = e.value;
      outputs[1].textContent = e.value;
      outputs[2].textContent = e.value;
      outputs[4].textContent = e.value;

    }
  }
}
