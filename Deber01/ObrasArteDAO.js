
/*
Se implementan las operaciones CRUD para cada obra
*/
const fs = require('fs/promises');
const archivo = 'obras.txt';

//lectura de obras de arte
const leer = async () => {
    try {
        const texto = await fs.readFile(`./${archivo}`);
        const json = JSON.parse(texto);
        return json;
    } catch (error) {
        throw error;
    }
}

//creacion de obras de arte
const crear = async (obra) =>{
    try {
        const listaObras = await leer();
        const yaExiste = listaObras.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.id === obra.id;
            }
        );
        if(!yaExiste){
            listaObras.push(obra);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaObras));
        }
        else{
            throw 'Obra ya registrada';
        }
        
    } catch (error) {
        if(error.code === 'ENOENT'){
            try {
                await fs.writeFile(`./${archivo}`,JSON.stringify([obra]));
            } catch (errorW) {
                throw errorW;
            }
        }
        else{
            throw error
        }
    }
};

//actualizacion de obras de arte
const actualizar = async (idObra, nuevaExpo, nuevoPrecio, nuevaDesc) =>{
    try {
        let listaObras = await leer();
        const index = listaObras.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === idObra;
        });
        if(index>=0){
            const obraAEditar = listaObras[index];
            obraAEditar.estaEnExposicion = nuevaExpo;
            obraAEditar.precio = nuevoPrecio;
            obraAEditar.descripcion = nuevaDesc; 
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaObras));
            return obraAEditar;
        }else{
            throw 'No se pudo actualizar: no se encuentra obra';
        }
    } catch (error) {
        throw error;
    }
}
//eliminacion de una obra por su id
const eliminar = async(obraId) =>{
    try {
        let listaObras = await leer();
        const index = listaObras.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === obraId;
        });
        if(index>=0){
            listaObras.splice(index,1);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaObras));
        }else{
            throw 'No se pudo eliminar: No se encuentra obra';
        }
    } catch (error) {
        throw error;
    }
}

//export{crear,leer,actualizar,eliminar};
exports.leer = leer;
exports.crear = crear;
exports.actualizar = actualizar;
exports.eliminar = eliminar;