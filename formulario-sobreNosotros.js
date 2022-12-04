const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const botonEnviar = document.getElementById("boton")
console.log(nombre , apellido , email)

window.addEventListener("load",function(){
    this.alert("cargando formulario por favor espere")
   
})


function enviar(){
    window.confirm("¿Estás seguro que queres enviar el formulario?");
    
}

