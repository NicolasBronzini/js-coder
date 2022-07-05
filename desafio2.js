


function calcular_pago( deuda , cuota){

     if (cuota <=2){
      deuda = deuda *1.21
    }

      total = deuda / cuota
   
   

}



let deuda = parseInt(prompt("ingrese de que valor es su deuda"));

let cuota = parseInt(prompt("ingrese en cuabntas cuotas quiere hacer el pago de su deuda"));

calcular_pago(deuda , cuota)

console.log ("Bienvenido, Pague su deuda");

console.log ("El total a pagar es:", total);

console.log ("En ", cuota, "cuotas");


