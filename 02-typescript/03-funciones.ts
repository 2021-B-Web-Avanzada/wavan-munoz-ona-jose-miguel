//03-funciones
function sumaNumeros(
    numeroInicial:number,
    ...numerosInfinitos: number[]
):number{
    return numeroInicial;
}
//ya no podemos mandar cualquier tipo de dato
//sumaNumeros('asd','asd')
sumaNumeros(1,2,3,4,5,3);

function imprimir(mensaje:string):void{ //el void es opcional y es como undefined
    console.log(`Hola ${mensaje}`);
}

const arregloNumeros:number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumeroTres: (number | string | boolean)[] = [1,'dos',true]; //arreglo que admite tres tipos de datos
const aregloNumerosCuatro: Array<number | string | boolean> = [1,'dos',true];
let arregloNumeroCinco: number[] | string[] = [1,2]; //este arreglo admite o solo numeros o solo strings
arregloNumeroCinco = ['uno', 'dos'];