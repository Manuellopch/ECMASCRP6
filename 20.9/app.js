//Reguladores Parte 1

//dos tipos de expresiones regulares
/*
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);*/

let valor, expReg; 

//expReg = /[0,1,2,3,4,5]/;
//valor = 1992;

//una fecha en exp regular 24/05/2020

expReg = /\d\d-\d\d-\d\d\d\d/
valor = '24/05/2020';

//para la hora
expReg =/\d\d:\d\d/
valor = '10:30 AM';

//digitos

expReg=/\d\d\d\d/
valor = 123456;

//Negar la expresion

expReg = /[^0-9]/;

valor = 1992;

//expresion Regular
expReg = /\d{1,2}-\d{1,2}-\d{4}/
valor = '10-10-2020';

//letras a numeros
expReg = /\d+/
valor = 1234;


//un texto sean puras mayusculas
expReg = /([A-Z])\w+/
valor = 'HOLA MUNDO';


//un texto sean puras minusculas
expReg = /([a-z])\w+/
valor = 'hola mundo';
console.log(expReg.test(valor));