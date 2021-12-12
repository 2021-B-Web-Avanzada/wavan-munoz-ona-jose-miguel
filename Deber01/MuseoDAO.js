/*
Se implementan las operaciones CRUD para cada museo
*/
const fs = require('fs/promises');
const { Museo } = require('./museo');
const archivo = 'museos.txt';
//lectura de museos
const leer = async () => {
    try {
        const texto = await fs.readFile(`./${archivo}`);
        const json = JSON.parse(texto);
        return json;
    } catch (error) {
        throw error;
    }
}

//creacion de museos
const crear = async (museo) =>{
    try {
        const listaMuseos = await leer();
        const yaExiste = listaMuseos.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.id === museo.id;
            }
        );
        if(!yaExiste){
            listaMuseos.push(museo);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaMuseos));
        }
        else{
            throw 'Museo ya registrado';
        }
        
    } catch (error) {
        if(error.code === 'ENOENT'){
            try {
                await fs.writeFile(`./${archivo}`,JSON.stringify([museo]));
            } catch (errorW) {
                throw errorW;
            }
        }
        else{
            throw error
        }
    }
};

//actualizacion de informacion de museos
const actualizar = async (museo) =>{
    try {
        let listaMuseos = await leer();
        const index = listaMuseos.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === museo.id;
        });
        if(index>=0){
            const {id, obras} = listaMuseos[index];
            const {nombre, direccion, horaApertura} = museo;
            const nuevoMuseo = new Museo(id, nombre,direccion,horaApertura,obras); 
            listaMuseos.splice(index,1,nuevoMuseo);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaMuseos));
        }else{
            throw 'No se pudo actualizar: no se encuentra museo';
        }
    } catch (error) {
        throw error;
    }
}

//eliminar museo por ID
const eliminar = async(museoID) =>{
    try {
        let listaMuseos = await leer();
        const index = listaMuseos.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === museoID;
        });
        if(index>=0){
            listaMuseos.splice(index,1);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaMuseos));
        }else{
            throw 'No se pudo eliminar: no se encuentra museo';
        }
    } catch (error) {
        throw error;
    }
}

//añadir obras a un museo
const addObra = async(obra, idMuseo) =>{
    try {
        let listaMuseos = await leer();
        const indiceMuseo = listaMuseos.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === idMuseo;
        });
        if(indiceMuseo >=0){
            let museO = listaMuseos[indiceMuseo];
            museO.obras.push(obra);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaMuseos));
        }else{
            throw 'No se pudo añadir obra: no se encuentra museo';
        }
    } catch (error) {
        throw error;
    }
}

//listar las obras de un museo
const listarObras = async (museoId) =>{
    try {
        const museos = await leer();
        const museoA = museos.find(
            (museoActual, indice, arreglo) =>{
                return museoActual.id === museoId
            }
        );
        if(museoA!== undefined){
            return museoA.obras;
        } else{
            throw "Error: No se encuenta museo";
        }
    } catch (error) {
        throw error
    }
}

const updateObra = async (obra, museoId) =>{
    try {
        const museos = await leer();
        const museoA = museos.find(
            (museoActual, indice, arreglo) =>{
                return museoActual.id === museoId
            }
        );
        if(museoA!== undefined){
            const obrasMuseo = museoA.obras;
            const index = obrasMuseo.findIndex((valorActual,indice,arr)=>{
                return valorActual.id === obra.id;
            });
            if(index>=0){
                obrasMuseo[index] = obra;
                await fs.writeFile(`./${archivo}`,JSON.stringify(museos));
            }else{
                throw 'No se pudo actualizar: no se encuentra obra';
            }
        } else{
            throw "Error: No se encuenta museo";
        }
    } catch (error) {
        throw error;
    }
};

const delObra = async (obraId, museoId) =>{
    try {
        const museos = await leer();
        const museoA = museos.find(
            (museoActual, indice, arreglo) =>{
                return museoActual.id === museoId
            }
        );
        if(museoA!== undefined){
            const obrasMuseo = museoA.obras;
            const index = obrasMuseo.findIndex((valorActual,indice,arr)=>{
                return valorActual.id === obraId;
            });
            if(index>=0){
                obrasMuseo.splice(index,1);
                await fs.writeFile(`./${archivo}`,JSON.stringify(museos));
            }else{
                throw 'No se pudo Eliminar: no se encuentra obra';
            }
        } else{
            throw "Error: No se encuenta museo";
        }
    } catch (error) {
        throw error;
    }
};

// export{crear,leer,actualizar,eliminar};
exports.leer = leer;
exports.crear = crear;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.addObra = addObra;
exports.listarObras = listarObras;
exports.updateObra = updateObra;
exports.delObra = delObra;