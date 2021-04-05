//Destructuring Arreglos y Objetos
/*const ciudades = ['Londres','New York','Guatemala'];

let[primera, segunda] = ciudades;

console.log(primera);
console.log(segunda);
//Mapeo
const ciudades = ['Londres','New York','Guatemala'];
let[, , tercera] = ciudades;
console.log(tercera);
//Imprimir Arreglo y objeto al mismo tiempo
const ciudades = ['Londres','New York','Guatemala',{
     Pais: 'Mexico'
}];
let[Pais] = ciudades;
console.log(ciudades);
console.log(Pais);*/
//Un ejemplo mas complejo
const clientes = {
     saldo: 5000,
     Tipo: 'Premium',
     datos:{
          nombre: 'Manuel',
          apellido: 'Morales',
          residencia:{
               Pais:'Guatemala',
               departamento: 'Huehuetenango'
          },
     },
     movimientos:['23/06/2020','15/06/2020','01/06/2020']
}
let{
     saldo,
     Tipo,
     datos:{
          nombre,
          apellido,
          residencia:{
               Pais,
               departamento
          }
     },
     movimientos:[,dos]
} = clientes;
console.log(saldo);
console.log(Tipo);
console.log(nombre);
console.log(apellido);
console.log(Pais);
console.log(departamento);
console.log(dos);