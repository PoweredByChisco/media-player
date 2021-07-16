interface Observer { //El suscribido / usuario
    update: (data: any) => void
}

interface Subject { //El que ofrece la suscripcion
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject { //Implements es parte de typescript, es para implementar la interface
    observers: Observer[] = []

    constructor() {
        const el: HTMLInputElement = document.querySelector("#value")
        el.addEventListener('input', () => {
            this.notify(el.value)
        })
    }

    subscribe (observer: Observer){
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(index, 1)
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
private el: HTMLElement

    constructor(){
        this.el = document.querySelector("#price")
    }
    
    update(data: any){
        this.el.innerText = data
    }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display)

setTimeout(() => {
    value.unsubscribe(display)
}, 10000);