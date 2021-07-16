import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number //Propiedad privada
  player: MediaPlayer //Lo usamos como un tipo, esto es porque player lo instanciamos desde MediaPlayer, al hacer esto Mediaplayer tiene que ser de tipo Class, no de prototipado, sin embargo de no ser asi podemos hacer un "quick fix", el cual cambiara de manera instantanea a tipo clase

  constructor() {
    this.threshold = 0.25; //Threshold indica a partir de que punto del observador se ejecutara e callback, en este caso a partir del 25 porciento de su viewport ejecutara el callback
    this.handleIntersection = this.handleIntersection.bind(this); //Recordemos hacer bind para que no pierda el contexto del this, ya si no se referira al objeto que lo ejecuta (al observer)
    this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibiltyChange);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibiltyChange() {
    const isVisible = document.hidden;
    isVisible ? this.player.pause() : this.player.play();
  }
}

export default AutoPause;
