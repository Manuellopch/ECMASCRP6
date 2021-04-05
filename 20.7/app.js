//Generadores
/*
function *crearGenerador(){

     yield 1;
     yield 'Nombre';
     yield 2+2;
     yield true;

}

const iterador = crearGenerador();

//obtener cada uno de los valores

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);*/

//Crear un Generador que va a recorrer un arreglo
function *nuevoGenerador(){

     for(let i = 0; i <= carrito.length; i++ ){
          yield carrito[i];
     }

}
//creamos el carrito

const carrito = ['Producto 1','Producto 2','Producto 3'];

//recorremos el iterador

let iterador = nuevoGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);