const fs = require('fs');

/*
* Hacer una funcion que me acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. La funcion debe tomar estos parametros y leer el archivo y
* añadir el texto al final del archivo
* */

function escribirArchivo(path, contenidoNuevo){
    /*fs.open(
        path,
        'a',
        (err, fd) =>{
            fs.write(
                fd, //descriptor del archivo, integer
                contenidoNuevo,
                { flag: 'a+' },
                (error) => {
                    console.error(error);
                }
            );
        }
    )*/
    fs.writeFile(
        path, //descriptor del archivo, integer
        contenidoNuevo,
        { flag: 'a+' },
        (error) => {
            console.error(error);
        }
    );
}
escribirArchivo(
    './06-ejemplo.txt',
    'aaaaAplicaciones Moviles22'
)