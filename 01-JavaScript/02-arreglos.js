//02-arreglos.js
let arreglo = [6,7,8,9,10];
//declarado con LET, podemos asignar la variable a muchas cosas
arreglo = 1;
arreglo = true;
//podemos formar un arreglo de cualquier tipo
arreglo = [true,1,1.1,'Miguel',undefined,null,{},[1,2]];
arreglo = [6,7,8,9,10];

//for of
for(let numero of arreglo){ //valores
    console.log(`numero: ${numero}`);
}

//for in
for(let indice in arreglo){ //indices
    console.log(`indice: ${indice}, valor ${arreglo[indice]}`);
}

let objetoPrueba = {a: '1',b:'2',c:'3'};
for(let llave in objetoPrueba){//indices
    console.log(`llave, ${llave}`);
}

arreglo.push(11); //agregar al final un elemento
// [6,7,8,9,10,11]
arreglo.pop(); //Eliminar al final de un elemento
// [6,7,8,9,10]
arreglo.unshift(5); //Agregar al principio del arreglo
//  [5,6,7,8,9,10]
console.log(arreglo)

//agregar en el indice 0
//splice(indice, numero de elementos eliminados, ... items a agregar)
arreglo.splice(0,0,4)
// [4,5,6,7,8,9,10]

//ahora vamos a eliminar el nueve y el diez
const indice = arreglo.indexOf(9); //Encuentra el primer elemento y devuelve el indice
arreglo.splice(indice,2);
// [4,5,6,7,8]
console.log(arreglo);

