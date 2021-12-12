class Museo{
    constructor(id,nombre, direccion, horaApertura, obras = []){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.horaApertura = horaApertura;
        this.obras = obras;
    }
}

exports.Museo = Museo;