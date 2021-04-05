//Maps
/*let cliente = new Map();

cliente.set('Nombre', 'karen');
cliente.set('Cuenta', 'Premium');
cliente.set('Saldo', 3000);

console.log(cliente.get('Nombre'));

console.log(cliente.get('Cuenta'));

console.log(cliente.get('Saldo'));


//Metodos Para Los Maps Comprobar que exista un valor

console.log(cliente.has('Cuenta'))

//borrar un elemento del Map

cliente.delete('Nombre');
console.log(cliente);

//borrar todo el contenido

cliente.clear();
console.log(cliente); */

//el map evita duplicados al igual que el set

const paciente = new Map(

(['Nombre', 'paciente']
 ['Habitacion', 'No definido']
)

)

paciente.set('Nombre', 'Antonio');
paciente.set('Habitacion', 4000);
paciente.set('Habitacion', 6000);

//recorrer el map con un forEach

paciente.forEach((index, datos)=>{
     console.log(`${datos} : ${index}`);
})

