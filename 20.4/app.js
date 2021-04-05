//sets
let carrito = new Set();
carrito.add('Carrito');
carrito.add('Disco  #1');
carrito.add('Camisa #2');
carrito.add('Bicicleta #3');

let numeros = new Set([1,2,3,4,5,6,7,1,2,3,4,5])


//Comprobar que un elemento exista
//console.log(carrito.has('Carrito'));

// borrar un elemento

//carrito.delete('Carrito')

//Limpiar carrito

//carrito.clear();

//recorrer el set

carrito.forEach((producto, index) => {
     console.log(`${index} : ${producto}`);
});

//Convertir el Set a un arreglo

const arregloCarrito = [...carrito];

console.log(arregloCarrito);