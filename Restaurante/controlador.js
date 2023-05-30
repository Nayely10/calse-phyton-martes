let nombreUsuario=document.getElementById("nombre")
let correoUsuario=document.getElementById("correo")
let contraseñaUsuario=document.getElementById("contraseña")
let telefonoUsuario=document.getElementById("telefono")
let botonEnvio=document.getElementById("botonFormulario")

//vamos a escuchar el clic en el boton
botonEnvio.addEventListener("click",function(evento){
    evento.preventDefault()
    let nombre=nombreUsuario.value
    let correo=correoUsuario.value
    let contraseña=contraseñaUsuario.value
    let telefono=telefonoUsuario.value

    let errores=[]
   
    if(!nombre){
        errores.push("error en el nombre")
        nombreUsuario.classList.add("is-invalid")
    }
    
    if(!correo){
        errores.push("error en el correo")
        correoUsuario.classList.add("is-invalid")
    }
    
    if(!contraseña){
        errores.push("error en la contraseña")
        contraseñaUsuario.classList.add("is-invalid")
    }

    if(!telefono){
        errores.push("error en el telefono")
        telefonoUsuario.classList.add("is-invalid")
    }


    if(errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }else{
        Swal.fire(
            'Exito en la reserva',
            'You clicked the button!',
            'success'
          )
    }


})
