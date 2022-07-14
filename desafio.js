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
      document.getElementById("vuelta_deuda").innerHTML = "El valor de tu deuda es de: " , total ," Se va a pagar en :" , cuota , "cuotas"
};



let usuarios = ["Pepe", "Jose" , "Cata" , "Male"];



console.log ("Bienvenido, Pague su deuda");

console.log ("Su nombre es :" , nombre_usuario);

console.log ("El total a pagar es:", total);

console.log ("En ", cuota, "cuotas");


