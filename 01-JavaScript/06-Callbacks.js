//06-Callbacks.js
const fs = require('fs'); //importar la libreria del fileSys
//vamos a crear un archivo 06-ejemplo.txt -> hola
console.log("primero");
fs.readFile(
    './01-variables.js',
    'utf-8',
    (error, contenido) => {
        if(error){
            console.error("Error leyendo contenido");
        } else {
            console.log(contenido);
        }
        fs.readFile(
          './06-ejemplo.txt',
          'utf-8',
            (error2,contenido2) => {
                if(error2){
                    console.error("Error leyendo contenido");
                } else {
                    console.log(contenido2);
                }
            }
        );

    }
);

console.log("tercero");