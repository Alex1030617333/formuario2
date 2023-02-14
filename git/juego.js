


// Una de las tres opciones debe de permitir pasar a la siguiente escena, las otras  conllevan perder el juego


// Solution domain
// - Se puede usar alert y prompt como MVP
// - Se puede usar manipulacion del DOM



// const saludo = "Hola"
// alert(saludo)

// const nombre1= prompt("Ingrese su nombre para ser registrado ").trim().toUpperCase()
// alert("Bienveni@" +" "+ nombre1)

 let opcioninicio=prompt("Deseas ingresar al menu del juego Si o No").trim()
if (opcioninicio === "si" ) {
 let  nuevonombre=prompt("Ingrese un nuevo usuario para iniciar el juego").trim()
    
            
     if(nuevonombre ===""){
        alert(`No hay usuario ingresado`)
    }
     else if(nuevonombre ==="yesid" ){
        alert(`Muchas gracias señ@r ${nuevonombre}
         ya puede navegar por las opciones del juego`)
         
        const menu1 = prompt(`
        1: Desea continuar su partida\n
        2: Desea empezar el juego \n
        3: Desea parar el juego\n
        4: Desea salir del juego`).trim()
    
        switch (menu1) {
        case "1":
             alert(`Has ingresado "1" para continuar con el juego`).trim()
             break;
                    
            case "2":
                alert(`Has ingresado "2" para empezado el juego `)

            if (menu1 ==="2") {
            alert(`Hola te damos la bienvenida al juego "ComHafriBlack",  
                   donde las iluciones se asen practica y las praticas realida`)
                        
            const nuevonivel= prompt(`Cual era el nombre de bogota  \n 
            Opcion 1:  Santa Fe \n
            Opcion 2:  Granada de Santa Fe .. \n
            Opcion 3:  Santa Fe de Granada.\n
            Opcion 4:  Santa Fe de Bacatá  `).trim()
            if (nuevonivel== "3") {
            alert(`Respuesta correcta "Santa Fe de Granada"  `)
             alert("En hora buena has pasado al segundo nivel")

            const niveldos= prompt(`Cuantos pelos tiene un gato en la lengu  \n 
            Opcion 1:  uno \n
            Opcion 2:  ocho .. \n
            Opcion 3:  veinte.\n
            Opcion 4:  cero `).trim()
                 }
                 break;
            } else {
             alert("La opcion no es correcta")
                }
             break;
                
            case "3":
                alert(`Desea pausar el juego`)
            break;
                        
            case "4":
                alert(`Desea salir del juego `)
                break;
            
            default:
                alert(`Lo sentimos la opcion ${menu} no esta  disponible en el momento`)
                break;
        
            }      
    } else {
       alert(`Lo sentimos su nombre no puede ser registrado en el sistema`)
      }
    }
        
else if(opcioninicio === "no" ){
alert(`Lo sentimos has selecionado "no"- para poder ingresado ha el menu del juego  debes ingresar "si"`)
 } else {
alert(`Lo sentimos no esta en el sistema `)
}