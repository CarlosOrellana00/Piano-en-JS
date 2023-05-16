const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("assets/audio/a.wav");//audio por defecto

const playTune = (key) => {
  audio.src = `assets/audio/${key}.wav`;
  audio.play();
}

pianoKeys.forEach(key => {
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  playTune(e.key);
}

document.addEventListener("keydown", pressedKey);