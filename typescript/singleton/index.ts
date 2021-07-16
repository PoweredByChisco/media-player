import Singleton from './Singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance() //Si la referencia en memoria de a es igual a b, entonces singleton estara exportando solamente una instancia

console.log('A es igual a B?', a === b)

