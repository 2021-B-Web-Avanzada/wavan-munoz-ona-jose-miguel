class Obra{
    constructor(nombre, autor, estaEnExposicion, precio, descripcion){
        this.id = `${autor}-${nombre}`;
        this.nombre = nombre;
        this.autor = autor;
        this.estaEnExposicion = estaEnExposicion;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

exports.Obra = Obra;