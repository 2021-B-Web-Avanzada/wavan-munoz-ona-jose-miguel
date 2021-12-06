//03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

/*
=================
FIND
Enviamos una expresion -> TRUTY FALSY
devuelve el primero que cumpla con esa condición
================
 */
const respuestaFind = arreglo
    .find(function (valorActual, indiceActual,arregloCompleto){
        console.log(`Valor actual ${valorActual}`);
        console.log(`Indice actual ${indiceActual}`);
        console.log(`Arreglo completo ${arregloCompleto}`);
        return valorActual.nombre === "Cristian";
    })
console.log(`Respuesta Find ${respuestaFind}`); //si no encuentra devuelve undefined

/*
=================
FINDINDEX
Enviamos una expresion -> TRUTY FALSY
devuelve el indice que cumple con la condicion
y su no existe -1
================
 */

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    )
console.log('Respuesta Index', respuestaIndex);

/*
=================
FOREACH
Es lo mismo que el for, pero es mas mantenible
================
 */
const respuestaForEach = arreglo
    .forEach(
        function (valorAcual, indiceActual,arregloCompleto){
            console.log('Valor actual', valorAcual);
        }
    )
console.log(`Respuesta ForEach ${respuestaForEach}`); // como no retorna nada, la respuesta siempre es undefined

/*
=================
MAP
Permite modificar, MUTAR un arreglo, y devuelve un nuevo arreglo
================
 */
const respuestaMap = arreglo
.map(function (valorActual,indiceActual,arregloCompleto){
    const nuevoElemento = {
        id: valorActual.id,
        nombre: valorActual.nombre,
        nota: valorActual.nota +1
    };
    return nuevoElemento;
})

console.log('Respuesta map', respuestaMap);
console.log('Arreglo', arreglo);

/*
=================
FILTER
Enviamos expresión truty falsy
devuelve los elementos que cumplen la condicion
================
 */
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14; //devuelve todos los estudiantes que pasaron la materia
        }
    );

console.log('Respuesta Filter', respuestaFilter);
console.log('Arreglo',arreglo);

/*
=================
SOME
Enviamos expresión truty falsy
devuelve un boolean true SI
existe ALGUN elemento que cumpla la condición
(es como un OR)
================
 */

const respuestaSome = arreglo
.some(
    (valorActual, indiceActual, arregloCompleo) => {
        return valorActual.nota <9 ;
    }
);
console.log('Respuesta some', respuestaSome);

/*
=================
EVERY
Enviamos expresión truty falsy
devuelve un boolean true SI
TODOS los elementos cumplen con la condicion
(es como un AND)
================
 */
const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleo) => {
            return valorActual.nota > 14;
        }
    );
console.log('Respuesta Every', respuestaEvery);

/*
=================
REDUCE (izq -> der)
REDUCE RIGHT (der -> izq)
sirve para acumular valores. Ejemplo:
Empezamos con 100 de vida, y cada ataque de un enemigo va bajando la vida
los ataques  de cada enemigo se encuentran en el arreglo
[-1, -2, -3, -5, -6, -5, -4, -3, -1]
y quiero bajarle esto de los 100 puntos de visa
--
Al reduce no le importn las operaciones (si es suma o resta o lo que sea), sino que va
modificando el acumulador
================
 */
const respuestaReduce = arreglo
.reduce(
    function (valorAcumulado,valorActual,indice,arreglo){
        return valorAcumulado + valorActual.nota;
    },
    100 //Valor inicial del acumulador
);
console.log('Respuesta Reduce', respuestaReduce);