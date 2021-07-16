//Interfaces, es como una manera de predifinir una directiva a seguir en cuanto a los tipos de datos en un objeto que se le declare con ese tipo, es como un tipo de tipos
enum Color {
    Rojos = "Rojo",
    Verdes = "Verde"
}

interface Rectangulo{
    ancho: number
    alto: number
    color?: Color //Lo marcamos como opcional, entonces puede o no venir incluido en el objeto
}

//Si no le damos todos los datos predefinidos por su interfaz, esta tirara error
let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    /* color: Color.Rojos, */
}

function area(r: Rectangulo) { //Es como si le pasaromos como parametro solo el objeto definido del mismo tipo
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : "Un rectangulo"
}
console.log(rect.toString())