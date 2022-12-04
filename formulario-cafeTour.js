window.addEventListener("load", function(){
    this.alert("cargando formulario por favor espere");

    let formulario = document.querySelector("form.formulario");
    let edad = document.querySelector("input.edad");
    let botonEnviar = document.getElementById("botonEnviar")

    formulario.addEventListener("submit", function(e){
        if(edad.value<=0){
            this.alert("En el campo edad...No se puede ingresar valores negativos");
        }
    })

    botonEnviar.addEventListener('click', function(){
        window.confirm("¿Estás seguro que queres enviar el formulario?");
    })
})


