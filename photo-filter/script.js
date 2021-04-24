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

//https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/15.jpg

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



