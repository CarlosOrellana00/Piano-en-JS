const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("assets/audio/a.wav");//audio por defecto

const playTune = (key) => {
  audio.play();
}

pianoKeys.forEach(key => {
  key.addEventListener("click", () => playTune(key.CDATA_SECTION_NODE.key));
});