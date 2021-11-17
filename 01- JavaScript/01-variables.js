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
//creando un objeto
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
