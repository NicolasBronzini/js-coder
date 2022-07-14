btn_nombre.addEventListener("click", function (){

  let nombre_usuario = document.getElementById("ingreso_nombre") ;

  nombre_deudor (usuarios , nombre_usuario)
 });

function nombre_deudor (usuarios , nombre_usuario){

  if (usuarios.includes (nombre_usuario.value)){

  let deuda = parseInt(prompt("ingrese de que valor es su deuda"));

  let cuota = parseInt(prompt("ingrese en cuantas cuotas quiere hacer el pago de su deuda"));  

  calcular_pago (deuda , cuota)

  } else {

      alert ("Usted no es un deudor" , nombre_usuario)
  }

};

function calcular_pago( deuda , cuota){

  if (cuota <=2){
   deuda = deuda *1.21
 }
   total = deuda / cuota
  

  document.getElementById("vuelta_deuda").innerHTML =("Su plan de pago es de  " + total + " En un plan de " +  cuota + " cuotas");
};


let usuarios = ["Pepe", "Jose" , "Cata" , "Male"];




