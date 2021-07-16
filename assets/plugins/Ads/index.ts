import MediaPlayer from '../../MediaPlayer'
import Ads, { Ad } from "./Ads"


class AdsPlugin {
    private ads: Ads
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer:HTMLElement


    constructor() {
        this.ads = Ads.getInstance() //Recordemos que es Singleton, entonces el constructor solo lo obtenemos  a traves de getInstance ya que todo lo demas es privado
        this.adsContainer = document.createElement("div")
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer)
        this.media = this.player.media;
        this.media.addEventListener("timeupdate", this.handleTimeUpdate) //Los elementos HTML tienen el metodo timeupdate que nos avisa cada que se actualiza el tiempo (cada segunto por ejemplo)
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime)
        if(currentTime % 30 ===0) {
            this.renderAd()
        }
    }

    private renderAd() {
        if(this.currentAd){ //De nuevo un patron singleton
            return
        }
        const ad = this.ads.getAd()
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
            <div class="ads">
                <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                    <img class="ads__img" src="${this.currentAd.imageUrl}" />
                    <div class="ads__info">
                        <h5 class="ads__title">${this.currentAd.title}</h5>
                        <p class="ads__body">${this.currentAd.body}</p>
                    </div>
                </a>
            </div>
        `;

            setTimeout(() => {
               this.currentAd = null 
               this.adsContainer.innerHTML = ''
            }, 10000);
        }

}

export default AdsPlugin
