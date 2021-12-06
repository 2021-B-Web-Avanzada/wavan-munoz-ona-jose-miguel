// 09-ejercicio-lec-esc-promesas.js
const fs = require('fs');

/* Hacer una funcion que me acepte como parametro
una variable con el path del archivo y el contenido a agregar
al contenido del archivo. La funcion debe tomar estos dos parametros
y leer el archivo y anadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODO esto debe ser realizado con promesas
- promesa de lectura
- promesa de escritura
 */

function promesaLeerArchivo(path){
    return new Promise(
        (resolve,reject) =>{
            fs.readFile(
                path,
                'utf-8',
                (error,contenido) => {
                    if(error){
                        reject("Error leyendo contenido");
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    )
}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    return new Promise((resolve,reject)=>{
       const contenidoTotal = contenidoActual + '\n' + nuevoContenido;
        fs.writeFile(
            path,
            contenidoTotal,
            { flag: 'w' },
            (error) => {
                if(error){
                    reject(error);
                } else {
                    resolve(contenidoTotal);
                }
            }
        );
    });
}

function ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then((info) => {
            return promesaEscribirArchivo(path,info,nuevoContenido)
        })
        .then((info) => {
            return promesaLeerArchivo(path)
        })
        .then(data=>{console.log(data);})
}

ejercicio('./06-ejemplo.txt','CLASE 10')