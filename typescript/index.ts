//Boolean
let muted : boolean = true;
muted = false;
/* muted = "Callado" */ //Habria error

//Numeros
let age = "6"
let numerador: number = 42;
let denominador: number = age; //Error
let resultado = numerador / denominador

//String
let nombre: string = "Richard"
let saludo = `Me llamo ${nombre}`

//Arreglos
//Podemos definir (o no) que sea de un solo tipo, similar a C
let people: string[] = []
people = ["ISabel", "Iker", "Raul"]
//Si al escribir people. el mismo sistema nos dira todos los metodos que se pueden usar solo para el tipo de arreglo que definimos gracias a Typescript
people.push(9000)//error

let peopleAndNumbers: Array<string | number> = [] //Asi definimos de varios tipos
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

//enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Verde //No podemos elejir otro dato que no sea dentro de los definidos en enum
console.log(`Mi color favorito es ${colorFavorito}`) //Expected 1
//Esto pasa porque si no inicializamos el dato enum, nos dara la posicion del dato, para que nos de un resultado esperado debemos de inicializar los datos OJO: si inicializamos un dato tendremos que inicializar todos los demas

//Any = No sabemos el tipo de dato
let comodin: any = "Joker"
comodin = {type: 'Wildcard'}

//Object
let someObject: object = {type : 'Wildcard'}