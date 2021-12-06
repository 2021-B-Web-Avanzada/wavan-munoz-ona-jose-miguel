// 05-destructuracion.js

//destructuracion de objetos
const adrian = {
    nombre: 'Adrian'
}

const carolina = {
    nombre: 'Carolina',
    apellido: 'Eguez'
}

const adrianCarolina = { //creando una nueva referencia
    ...carolina, //1 el orden es importante cuando hay propiedades que se repiten
    ...adrian   // 2 el ultimo atributo repetido reemplaza a los anteriores
};

console.log('Objeto creado con destructuracion',adrianCarolina);

const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo); // que seria equivalente a hacer console.log(1,2,3,4,5,6,7,8,9,10);