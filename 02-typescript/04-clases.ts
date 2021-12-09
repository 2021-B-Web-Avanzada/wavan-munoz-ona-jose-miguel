//04-clases
class Persona{
    public nombre:string;
    public apellido:string;
    static nombreReferencia:string = 'humano';
    protected nombreYApellido = ''; // Duck Typing -> string

    constructor(nombreParametro:string, apellidoParametro:string) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = `${nombreParametro} ${apellidoParametro}`;
    }

    private mostrarNombreYApellido():string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(nombreParametro:string,
                apellidoParametro:string,
                public cedula:string, //si ponemos un modificador de acceso, se vuelve propiedad de la clase
                public estadoCivil:string) {
        super(nombreParametro, apellidoParametro);
    }
}

const miguel = new Usuario('Miguel','Munoz','1723171714','soltero');

console.log(miguel);