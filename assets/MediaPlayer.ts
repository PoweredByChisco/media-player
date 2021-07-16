class MediaPlayer {
  media: HTMLMediaElement //Este tipo de dato es porque media hace referencia a un elemento html, en este caso el elemento
  plugins: Array<any>;
  container: HTMLElement

  constructor(config) {
    this.media  = config.el;
    this.plugins = config.plugins || []; //Para evitar que no haya errores aunque no se encuentre ningun plugin
    this.initPlayer()   
    this.initPlugins();
  }

  initPlayer(){ //Lo que hacemos es crear un elemento div del mismo elemento que el vide y meter adentro de ese elemento el video, para asi poder colocar los anuncion en posicion absoluta, para que sea absoluta el padre debe de ser relativo, es decir el video
    this.container = document.createElement('div')
    this.container.style.position = "relative"
    this.media.parentNode.insertBefore(this.container, this.media)
    this.container.appendChild(this.media)
  }

  private initPlugins() {
    /* const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      }
    }; //Setter y getters, delimita los datos que se obtienen a traves del this aislandolos en datos virtuales, se comento porque con Typescript tira error */

    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  toggleMute() {
    if (this.media.muted) {
      this.media.muted = false;
    } else {
      this.media.muted = true;
    }
  }
}

export default MediaPlayer;
