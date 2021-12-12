const {Museo} = require('./museo');
const {Obra} = require('./Obra');
const museoDao = require('./MuseoDAO');
const obrasDao = require('./ObrasArteDAO');
const inquirer = require('inquirer');

const main = async() => {
    console.log('Bienvedo al sistema unificado de museos');
    const opciones = '¿Que deseas hacer? \n' +
    '1) Registrar Museo \n' + 
    '2) Listar Museos \n' +
    '3) Actualizar informacion de museo \n' +
    '4) Borrar museo\n'+
    '5) Registrar Obra\n'+
    '6) Listar Obras de Mueso\n' +
    '7) Actualizar Obra\n' +
    '8) Eliminar Obra\n';
    try {
        const respuesta = await inquirer.prompt([
            {
                type: 'number',
                name: 'numLista',
                message: opciones
            }
        ]);
        switch(respuesta.numLista){
            case 1:
                console.log('\n==============\n Datos de Museo \n==============\n');
                const datosMuseo = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'idMuseo',
                        message: 'Ingresa el identificador del museo'
                    },
                    {
                        type: 'input',
                        name: 'nombreMuseo',
                        message: 'Ingresa el nombre del museo'
                    },
                    
                    {
                        type: 'input',
                        name: 'direccionMuseo',
                        message: 'Ingresa la direccion'
                    },
                    
                    {
                        type: 'number',
                        name: 'horaApertura',
                        message: 'Ingresa la hora de apertura del museo'
                    }
                ]);
                let museo = new Museo(
                    datosMuseo.idMuseo,
                    datosMuseo.nombreMuseo,
                    datosMuseo.direccionMuseo,
                    datosMuseo.horaApertura);
                museoDao.crear(museo)
                .then(()=>console.log("Museo registrado exitosamente"))
                .catch((err)=> console.error(err));
                break;
            case 2:
                const listaMuseos = await museoDao.leer();
                const listaLegible = listaMuseos.map(
                    (valorActual, indice, arreglo)=>{
                        const {id, nombre, direccion, horaApertura} = valorActual;
                        return `${id}: ${nombre}, ${direccion}, abre a las ${horaApertura}`;
                    }
                )
                console.log('Lista de Museos: \n', listaLegible);
                break;
            case 3:
                let nuevoMuseo = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'idMuseo',
                        message: 'Ingrese el ID del museo'
                    },
                    {
                        type: 'input',
                        name: 'nombre',
                        message: 'Ingrese nuevo nombre del museo'
                    },
                    {
                        type:'input',
                        name: 'direccion',
                        message: 'Infrese la nueva direccion del museo'
                    },
                    {
                        type:'number',
                        name: 'horaApertura',
                        message: 'Ingresa la nueva hora de apertura'
                    }
                ]);
                museoDao.actualizar(new Museo(
                    nuevoMuseo.idMuseo,
                    nuevoMuseo.nombre,
                    nuevoMuseo.direccion,
                    nuevoMuseo.horaApertura
                ))
                .then(()=> console.log('Museo actualizado exitosamente'))
                .catch((err)=> console.error(err));
                break;
            
            case 4:
                let identificador = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'idMuseo',
                        message: 'Ingrese el ID del museo'
                    }
                ]);
                museoDao.eliminar(identificador.idMuseo)
                .then(()=>console.log('Museo eliminado exitosamente'))
                .catch((err)=> console.error(err));
                break;
            case 5:
                const datosObra = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'nombreMuseo',
                        message: 'Ingresa el ID del museo'
                    },
                    {
                        type: 'input',
                        name: 'nombreO',
                        message: 'Ingrese el nombre de la obra'
                    },
                    {
                        type: 'input',
                        name: 'autorO',
                        message: 'Ingrese el nombre del autor de la obra'
                    },
                    {
                        type: 'confirm',
                        name: 'enExpo',
                        message: 'La obra esta en exposicion?'
                    },
                    {
                        type: 'number',
                        name: 'precio',
                        message: "Ingrese el precio de la obra"
                    },
                    {
                        type: 'input',
                        name: 'desc',
                        message: "Ingrese una breve descripcion de la obra"
                    }
                ]);
                let obra = new Obra(
                    datosObra.nombreO,
                    datosObra.autorO,
                    datosObra.enExpo,
                    datosObra.precio,
                    datosObra.desc
                );
                obrasDao.crear(obra).then(() =>{
                    return museoDao.addObra(obra,datosObra.nombreMuseo);
                })
                .then(()=>{console.log("Obra registrada exitosamente!")})
                break;
            case 6:
                const respuesta = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'id',
                        message: "Ingrese el identificador del museo"
                    }
                ]);
                museoDao.listarObras(respuesta.id)
                .then((listaObras) =>{
                    console.log('Obras del museo', listaObras);
                })
                .catch((err) => console.log(err));
                break;
            case 7:
                const respuestaO = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'idM',
                        message: 'Ingresa el ID del museo'
                    },
                    {
                        type: 'input',
                        name: 'idO',
                        message: 'Ingrese el ID de la obra'
                    },
                    {
                        type: 'confirm',
                        name: 'enExpo',
                        message: 'La obra esta en exposicion?'
                    },
                    {
                        type: 'number',
                        name: 'precio',
                        message: "Ingrese el precio de la obra"
                    },
                    {
                        type: 'input',
                        name: 'desc',
                        message: "Ingrese una breve descripcion de la obra"
                    }
                ]);
                obrasDao.actualizar(
                    respuestaO.idO,
                    respuestaO.enExpo,
                    respuestaO.precio,
                    respuestaO.desc
                ).then((obraEditada) => {
                    return museoDao.updateObra(obraEditada,respuestaO.idM);
                })
                .then(()=> console.log('Datos de obra actualizados exitosamente!'))
                .catch((err) => {console.log(err)});
                break;
            case 8:
                const delDataO = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'idM',
                        message: 'Ingresa el ID del museo'
                    },
                    {
                        type: 'input',
                        name: 'idO',
                        message: 'Ingrese el ID de la obra'
                    }
                ]);
                obrasDao.eliminar(delDataO.idO)
                .then(()=>{
                    return museoDao.delObra(delDataO.idO, delDataO.idM);
                })
                .then(()=> console.log("Obra Eliminada Exitosamente"))
                .catch((err)=> console.log(err));
                break;
            default:
                throw 'Error: Numero ingresado incorrecto';
        }
        
    } catch (error) {
        throw error;
    }
}

main()
.catch((err)=> console.log(err) )