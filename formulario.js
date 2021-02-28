

   var titulo = document.getElementById("title");

   titulo.style.color= "blue";

var elementos = document.getElementsByName("sexo");
 
    for(var i=0; i<elementos.length; i++) {
     console.log(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
    }
    
    function limita(maximoCaracteres) {
    var elemento = document.getElementById("nombre");
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
      }
      else {
        return true;
      }
    }

    function limitaMovil (maxNumeros = 9) {
        var elemento = document.getElementById("movil");
        if(elemento.value.checked >= maxNumeros ) {
            return false;
        }
        else {
            return true;
        }
    }

    function mostrarMensaje ()
      {
          alert ("Usuario registrado");
      } 

 