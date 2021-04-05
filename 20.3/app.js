//symbols son siempre con corchetes

let nombre = Symbol();

let apellido = Symbol();

//crear una persona

let persona =  {}

persona.nombre = 'Juan';

persona[nombre] = 'Juan';

persona[apellido] = 'De la Torre'

persona.saldo = 100;

for(let i in persona){
     console.log(`${i} : ${persona[i]} `)
}
console.log(persona);