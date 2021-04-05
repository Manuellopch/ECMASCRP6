//Destructuring a funciones
/*function reservacion(completo, opciones){
     opciones = opciones || {};
     console.log(opciones);
};

//reservaciones
reservacion(
     true,
          {
               metodoPago: 'tarjeta',
               cantidad: 2000,
               dias: 3,
          }
)*/
//segunda forma de hacerlo
function reservacion(completo, 
     {
          metodoPago = 'efectivo',
          cantidad = 0,
          dias = 3
     } = {}
)
{
     if(completo){
          console.log('Proceder a reservar...');
     }else{
          console.log('Abandonar');
     }
};
reservacion(
     true,
     {
          metodoPago: 'tarjeta',
          cantidad: 5000,
          dias: 1
     }
);