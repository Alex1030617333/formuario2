
function habilitar() {
  let contrasena1 = document.getElementById("campo1");
  let contrasena2 = document.getElementById("campo2");
  let validartexto = document.getElementById("validartexto")
  let label = document.getElementById("leibol")
  let boton = document.getElementById("boton");

  if (contrasena1.value != contrasena2.value) {
    validartexto.innerText="Contraseña incorrecta"
    validartexto.style.color="red"


}else if (contrasena1.value === contrasena2.value) {
  validartexto.innerText="Contraseña correcta"  
  validartexto.style.color="white"  
    
  } else {
    boton.disabled = false;
    
  }

  
  if (contrasena2.style.display= "inline") {
    contrasena1.style.display = "none"
    label.style.display = "none"
    
  }

}
(function fechaHora() {
  
  let fecha = new Date()
  let mensajefechaHora = document.getElementById(" mensajefechaHora")


  mensajefechaHora.textContent=fecha.toLocaleDateString()
  mensajefechaHora.style.color="yellow"
  


})()




setTimeout(() => {
 
  let hora = document.getElementById("hora")
  let horario = new Date()
  hora.textContent=horario.toLocaleTimeString()

  let bienvenido= document.getElementById("bienvenido")
  let crearbienvenido= document.createElement("h1")
  crearbienvenido.textContent="! Hola \n ingrese los datos de cambio de contraseña"
  bienvenido.appendChild(crearbienvenido)
  bienvenido.style.color="white"
  bienvenido.style.textAlign= " justify"
  
  
  
  



}, 1000);
