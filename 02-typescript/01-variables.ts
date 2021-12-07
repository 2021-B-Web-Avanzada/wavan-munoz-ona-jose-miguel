//01-variables.ts

let nombre:string = 'Miguel';
// nombre =1; ya no es valido
nombre = 'Jose';
let edad: number = 32;
let casado: boolean = false;
let fecha:Date = new Date();
let sueldo:number;
sueldo = 12.4;
//TS tambien tiene duck typing
let apellido = 'Munoz'; //string
apellido = 'Ona'; //igual a otros string
apellido.toUpperCase(); //metodos string

let mariaJuana: any = 2;
mariaJuana = true;
mariaJuana = () => '2';

//tambien podemos guardar datos multiples
let edadMultiple: number |string|Date = 2; //esta variable puede ser un numero,un string o una fecha
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true; //da error
