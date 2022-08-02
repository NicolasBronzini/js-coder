btn_enviar.addEventListener("click", function (){

let deuda = document.getElementById("ingreso_total".value) ;

let cuota = document.getElementById("cuotas".value) ;

 calcular_pago (deuda , cuota);
})

function calcular_pago( deuda , cuota){

    if (cuota >=2){
     deuda *=1.21 ; total = deuda / cuota
   }
   if (cuota >=7){
    deuda *=1.51 ; total = deuda / cuota
  }
  if (cuota >=15){
    deuda *=1.99 ; total = deuda / cuota
  }
   else{
     total = deuda / cuota
    }
  
    document.getElementById("devolucion_datos").innerHTML =("Su plan de pago es de  " + total + " En un plan de " +  cuota + " cuotas");
  };
  
  let deuda = document.getElementById("ingreso_total".value) ;

    let cuota = document.getElementById("cuotas".value) ;