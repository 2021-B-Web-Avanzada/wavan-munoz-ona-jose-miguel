//01-variables.ts
var nombre = 'Miguel';
// nombre =1; ya no es valido
nombre = 'Jose';
var edad = 32;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
//TS tambien tiene duck typing
var apellido = 'Munoz'; //string
apellido = 'Ona'; //igual a otros string
apellido.toUpperCase(); //metodos string
var mariaJuana = 2;
mariaJuana = true;
mariaJuana = function () { return '2'; };
//tambien podemos guardar datos multiples
var edadMultiple = 2; //esta variable puede ser un numero,un string o una fecha
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true; //da error
