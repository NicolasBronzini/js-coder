
function nombre_deudor (usuarios , nombre_usuario){

  

  if ( nombre_usuario = usuarios){

  let deuda = parseInt(prompt("ingrese de que valor es su deuda"));

  let cuota = parseInt(prompt("ingrese en cuabntas cuotas quiere hacer el pago de su deuda"));  

  calcular_pago (nombre_usuario , usuarios)

  } else {

      alert ("Usted no es un deudor" , nombre_usuario)
  }

};

function calcular_pago( deuda , cuota){

     if (cuota <=2){
      deuda = deuda *1.21
    }

      total = deuda / cuota
   
};

let nombre_usuario = prompt("ingrese su nombre");

let usuarios = ["Pepe", "Jose" , "Cata" , "Male"];

nombre_deudor(usuarios , nombre_usuario);

console.log ("Bienvenido, Pague su deuda");

console.log ("Su nombre es :" , nombre_usuario);

console.log ("El total a pagar es:", total);

console.log ("En ", cuota, "cuotas");


