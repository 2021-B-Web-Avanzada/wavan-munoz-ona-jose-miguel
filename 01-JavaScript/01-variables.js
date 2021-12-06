//variables en JS

//Variables mutables e inmutables
//1. Mutables
var numeroUno = 1;
let numeroDos = 2; //no necesitamos poner el tipo de datos en JS

numeroUno = 5;
numeroDos = 6;
numeroUno = true;
numeroDos = false;

//2. Inmutables
const configuracionArch = "pdf";
//configuracionArch = "xml"
//vamos a preferir const, luego let y NUNCA var

/*
=====================================
Tipos de variables
=====================================
 */

const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Miguel"; //String
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

//como sabemos el tipo de dato?
//con la palabra reservada typeof
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof texto);
console.log(Number("asd")); //nos va a retornar un NaN (not a number)
console.log(typeof Number("asd")); //sin embargo, NaN es un tipo number

/*
==============
truty falsy
==============
 */

//vamos que sucede con las variables string
if(""){
    console.log("String vacio es verdadero");
}else{
    console.log("String vacio es falsy");//!
}
if("miguel"){
    console.log("String con datos es truty");//!
}else{
    console.log("String con datos es falsy");
}

//vamos que sucede con las variables number
if(-1){
    console.log("Número negativo es verdadero"); //!
}else{
    console.log("Número negativo es falsy");
}
if(0){
    console.log("Cero es truty");
}else{
    console.log("Cero es falsy");//!
}
if(1){
    console.log("Número positivo es verdadero");//!
}else{
    console.log("Número positivo es falsy");
}

if(null){
    console.log("NULL es verdadero");
}else{
    console.log("NULL es falsy"); //!
}
if(undefined){
    console.log("undefined es verdadero");
}else{
    console.log("undefined es falsy");//!
}

/*
=====================
Objetos JS (JSON) - Arreglos
=====================
 */
//creando un objeto, no son JSONs netamente
const persona = {
    nombre: "Miguel", //lave: valor
    apellido: "Munoz",
    edad: 22,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color: 'gris',
        talla: 'L'
    },
    mascotas: ['bolo','max','luna']
};

//acceder a las propiedades del objeto con el operador punto
persona.nombre; //Miguel
persona.apellido; //Munos

//podemos acceder tambien como si fuera un arreglo por medio de su clave
persona["nombre"]; // Miguel
console.log(persona)

//que pasa si queremos acceder a una propiedad que no existe?
// -> vamos a tener un undefined
persona.sueldo; //undefined
console.log(persona.sueldo);

persona.sueldo = 250;
persona["gastos"] = 100;
console.log(persona.gastos);
persona.nombre = undefined;
console.log(persona)
console.log(Object.keys(persona)); //keys retorna una lista de las propiedades
console.log(Object.values(persona)); // values retorna los valores asignados a cada propiedad

//eliminando propiedades
delete persona.nombre
console.log(persona)

/*
=======================
Variables por valor o referencia
======================
 */

//variables por valor en JS son las primitivas: number, string  y boolean
let miEdad = 32;
let otraEdad = miEdad; //cuando guardamos una primitiva en otra variable
//le pasamos el VALOR, no la referencia

console.log(miEdad);
console.log(otraEdad);
miEdad += 1;
console.log(miEdad); //33
console.log(otraEdad); //32

//variables por referencia: object ({},[])
// let rafael = {
//     nombre: "rafael"
// };
// let lenin = rafael;
// console.log(lenin);
// console.log(rafael);
// lenin.nombre = "Lenin";
// console.log(lenin);
// console.log(rafael);
// delete rafael.nombre;
// console.log(lenin);
// console.log(rafael);
let rafael  = {
    nombre: "Rafael"
}
//para clonar, usamos la función
let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([],arregloNumeros);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);