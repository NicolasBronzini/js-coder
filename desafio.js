btn_nombre.addEventListener("click", function (){

  let nombre_usuario = document.getElementById("ingreso_nombre") ;

  nombre_deudor (usuarios , nombre_usuario)
 });

function nombre_deudor (usuarios , nombre_usuario){

  if (usuarios.includes (nombre_usuario.value)){

    setTimeout(function() {
      location.href = "pagos.html";
    } )

  } else {
// esto con un else alert ya servia pero queria usar los operadores 
    usuarios != nombre_usuario && swal ( " Usted no es un deudor " +document.getElementById('ingreso_nombre').value + " , salga de aqui") ; //como hago que me devuelva el nombre aca
  };

};




let usuarios = ["Pepe", "Jose" , "Cata" , "Male"];



// eventos switch
let btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
})
