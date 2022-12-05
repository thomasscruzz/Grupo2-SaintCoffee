
function captura(){
    var nombres=document.getElementById("nombre").value;
    var apellidos=document.getElementById("apellido").value;
    var celulares=document.getElementById("celular").value;
    var calles=document.getElementById("calle").value;
    var alturas=document.getElementById("altura").value;
    var correos=document.getElementById("correo").value;
    var discapacidad=document.getElementById("disc").value;

    var regx=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    senial=0
    if (correos.match(regx)){
        senial=1
    }else{
        correos
        document.getElementById("correo").value="";
    }

    var correos=document.getElementById("correo").value;
    
    
    if(nombres==""){
        alert("Ingrese su nombre.");
        document.getElementById("nombre").focus();
    }else{
        if(apellidos==""){
            alert("Ingrese su apellido.");
            document.getElementById("apellido").focus();
        }else{   
            if(calles==""){
                alert("Ingrese su direccion.");
                document.getElementById("calle").focus();
            }else{       
                if(alturas==""){
                    alert("Ingrese la altura de su casa/dpto.");
                    document.getElementById("altura").focus();
                }else{
                    if(celulares==""){
                        alert("Ingrese su celular.");
                        document.getElementById("celular").focus();
                    }else{
                        if(correos==""){
                            alert("Correo no ingresado o inexistente.");
                            document.getElementById("correo").focus();
                        }else{
                            if(document.getElementById("disc").checked){
                                console.log(nombres+" "+apellidos+" - "+calles+" "+" "+alturas+" - "+celulares+"- "+correos+" "+ "Requiere transporte especial.");
                                document.getElementById("disc").click();
                            }else{console.log(nombres+" "+apellidos+" - "+calles+" "+" "+alturas+" - "+celulares+"- "+correos+" "+ "NO requiere transporte especial.");
                            }
                            alert("Datos enviados")
                            document.getElementById("nombre").value="";
                            document.getElementById("apellido").value="";
                            document.getElementById("calle").value="";
                            document.getElementById("altura").value="";
                            document.getElementById("correo").value="";
                            document.getElementById("celular").value="";
                            document.getElementById("disc").unck
                        }        
                    }    
                }
            }
        }
    }
}