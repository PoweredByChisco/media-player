//Este programa nos da un error al introducir mal el campo de email
//La idea principal es, crear la instancia field y poder decorar(modificar la clase) SIN modificar la clase
class Field{
    errors : string[]
    input: HTMLInputElement

    constructor(input:HTMLInputElement){
        this.input=input
        this.errors=[]

        let errorMessage = document.createElement('p')
        errorMessage.className='text-danger'
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling)

        this.input.addEventListener('input',()=>{
            this.errors=[]
            this.validate()
            errorMessage.innerText= this.errors [0] ||''
        })
    }
    validate(){}
}

function RequiredFieldDecorator(field:Field): Field{ //Este es la funcion decoradora, como vemos modifica la instancia NO la clase, anticipamos que la instancia que se creara tendra los metodos usados como validate para modificar y hacer uso de ellos OJO: Esta funcion no sabe que el pasado de nuestra instancia ni sus caracteristicas puesto que nos estamos anticipando a la creacion de dicha instancia, por lo tanto es posible que la instancia haya sido modificado anteriormente por otros decoradores, esto se tiene que tener en cuenta para sabe que decoradores damos prioridad y cuales no.
    let validate = field.validate; //Referenciamos a otra posicion de memoria el metodo de la clase validate para no modificar directamente dicha clase
    field.validate = function(){
        validate()
        let value = field.input.value;
        if (!value) {
            field.errors.push("Requerido")
        }
    }
    return field
}

function EmailFieldDecorator(field:Field): Field{
    let validate = field.validate; 
    field.validate = function(){
        validate()
        let value = field.input.value;

        if (value.indexOf("@") === -1) {
            field.errors.push("Debe ser un email")
        }
    }
    return field
}

let field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field) //Podriamos hacer otra funcion que reuna a todos los decorators, pero esto contradiria lo ya dicho sobre la prioridad que debe de tener cada decorator a su ejecucion
field = EmailFieldDecorator(field)