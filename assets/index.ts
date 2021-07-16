import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";


const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
}); //Codigo que se ejecuta al arranque
const play = document.getElementById("play");
const mute = document.getElementById("mute");

play.onclick = () => player.togglePlay();
/* video.addEventListener("click", () => player.toggleMute()); */
video.onclick = () => player.toggleMute();
mute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  }); //Registramos el service worker y creamos el archivo
}
