// 04-funciones.js

function soloNumeros(a,b,c){
    return a- b + c; //valor a devolver
}

//JS permite el uso de funciones sin validaciones
// solonumeros('v',true, [1,2,3]);

function soloLetras(a,b,c){
    //si no tiene un valor de retorno especifico, retorna undefined
    console.log(a,b,c);
}

//Funciones nombradas (named functions)
function funcionNombrada(){}

//Funciones sin nombre -> funciones anónimas
const funcionSinNombre = function(){}
//las funciones anonimas ya las usamos, en los arreglos [].foreach(function(){})
//para usar las funciones anonimas, llamamos por su asignacion
funcionSinNombre();

//Funciones anonimas - Fat arrow functions

const funcionFatArrow1 = () => {};
[].forEach(()=>{});

//SINTAXIS funciones
const fatArrowFx2 = (x) => {
    return x+1;
}

const fatArrowFx3 = (x) => x+1; //una sola linea, omito return y llaves

//si solo tenemosun paramtero, puedo omitir los parentesis
const fatArrowFx4 = x => x+1;

const fatArrowFx5 = (x,y,z) => x+y+z;

//funcion con parametros infinitos que llegan en un arreglo
//solo se puede tener una de estar por funcion
function sumarNumeros(...otrosNumeros){
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
}

sumarNumeros(1,2,3,4,5,6,7,8,9,10);