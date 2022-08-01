btn_nombre.addEventListener("click", function (){

  let nombre_usuario = document.getElementById("ingreso_nombre") ;

  nombre_deudor (usuarios , nombre_usuario)
 });

function nombre_deudor (usuarios , nombre_usuario){

  if (usuarios.includes (nombre_usuario.value)){

  let deuda = parseInt(prompt("ingrese de que valor es su deuda"));

  let cuota = parseInt(prompt("ingrese en cuantas cuotas quiere hacer el pago de su deuda"));  

  calcular_pago (deuda , cuota);

  } else {
// esto con un else alert ya servia pero queria usar los operadores 
    usuarios != nombre_usuario && alert ("Usted no es un deudor" +document.getElementById('ingreso_nombre').value);  //como hago que me devuelva el nombre aca
  };

};

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

  document.getElementById("vuelta_deuda").innerHTML =("Su plan de pago es de  " + total + " En un plan de " +  cuota + " cuotas");
};


let usuarios = ["Pepe", "Jose" , "Cata" , "Male"];



// eventos switch
let btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
})
