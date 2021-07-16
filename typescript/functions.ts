//tipado de parametros
function add(a: number, b: number): number /* Aqui para ser explicitos, de  lo contrario quedara implicito */ {
    return a+ b
}
const sum = add(5,6)

//Tipado de funciones
function creatAdder(a:number): (number)=> number{
    return function(b: number){
        return b + a
    }
}
const addFour = creatAdder(4)
const fourPlus6 = addFour(6)

//En typescript tenemos que pasar todos los argumentos, a no ser que añadamos un signo de interrogacion, de igual manera podemos definir parametros definidos asi lastname: string = "Smith"
function fullName(firstName: string, lastName?: string){
    return `${firstName} ${lastName}`;
}
const richard = fullName("Richard")


//Funcion que no retorna nada
function saludos():void{
    console.log("Hola mundo")
}