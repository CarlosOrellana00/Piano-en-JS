const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input");

let allKey =[],
audio = new Audio("assets/audio/a.wav");//audio por defecto

const playTune = (key) => {
  audio.src = `assets/audio/${key}.wav`;
  audio.play();
  // console.log(allKey);

  const clickedKey = document.querySelector(`[data-key = "${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() =>{
    clickedKey.classList.remove("active");
  },150);
}

pianoKeys.forEach(key => {
  allKey.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const pressedKey = (e) => {
  if(allKey.includes(e.key)) playTune(e.key);
}

volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown", pressedKey);