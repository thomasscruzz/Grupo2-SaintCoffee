const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const botonEnviar = document.getElementById("boton")

console.log(nombre , apellido , email)

window.addEventListener("load",function(e){
    this.alert("cargando formulario por favor espere")
    botonEnviar.addEventListener('click', function(){
        window.confirm("¿Estás seguro que queres enviar el formulario?");
    })
    
})




