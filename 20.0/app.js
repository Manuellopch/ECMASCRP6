/*const clientes = {
     nombre: 'Alejandra',
     Trabajo: 'Developer'
};
let nombre = clientes.nombre,
     trabajo = clientes.trabajo;
console.log(nombre);
console.log(trabajo); 
const clientes = {
     nombre: 'Alejandra',
     Trabajo: 'Developer'
};
let {nombre, Trabajo} = clientes
console.log(nombre);
console.log(Trabajo);
//hacer caso omiso al scope global
const clientes = {
     nombre: 'Alejandra',
     Trabajo: 'Developer'
};
nombre = 'Pedro',
Trabajo = 'Arquitecto'
let {nombre, Trabajo} = clientes
console.log(nombre);
console.log(Trabajo);
//Asignar datos en objetos
const clientes = {
     nombre: 'Manuel',
     tipo: 'Premium',
     Datos:{
          Ubicacion:{
               Pais: 'Guatemala',
               Departamento:'Huehuetenango'
          },
          Cuenta:{
               Saldo: 1000,
          }
     }
};
let {Datos:{Ubicacion}} = clientes;
console.log(Ubicacion);
console.log(Ubicacion.Departamento);
console.log(Ubicacion.Pais);*/
//Valor por Default cuando extraigas
const clientes = {
     nombre: 'Manuel'
};
let {nombre, tipo = 'Basico'} = clientes;
console.log(clientes);
console.log(tipo);


