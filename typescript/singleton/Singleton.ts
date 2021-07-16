class Singleton{
    private static instance: Singleton;

    private constructor() {
        // init
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance;
    } //Este metodo lo que hace es que crea un instancia en caso de que la instancia no exista, si existe solamente retorna la misma instancia asegurandonos asi de solamente tener una instancia
}

export default Singleton