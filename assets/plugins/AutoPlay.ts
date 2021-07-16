import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) { //Tipando a esa clase, podemos acceder asus valores
    if (!player.media.muted) {
      player.media.muted = true;
    } 
    player.media.play();
  }
}


export default AutoPlay;
