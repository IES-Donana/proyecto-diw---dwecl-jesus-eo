let btnenviar = document.getElementById("btnenviar");
btnenviar.addEventListener('click',validar);

let nombre = document.querySelector('#nombre');
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
/*Cuando pulsamos una tecla comprueba si es el shift*/
email.addEventListener('keydown', function (e) {
    if(e.shiftKey){
    alert("El email no puede contener mayúsculas");
    }
});


/* email.addEventListener('input',validar);
nombre.addEventListener('input',validar);
apellido.addEventListener('input',validar);  */


/* Hay que vaciar el valor de setCustomValidity porque se queda guardado la cadena introducida anteriormente */
function limpiarCustomvaliditi() {
    setCustomValidity() = '';
}

function validarEmail() { 
    limpiarCustomvaliditi();
    //Si no contiene datos validos
    if(!email.checkValidity()){
        if(email.validity.patternMismatch){
            email.setCustomValidity("Debes introducir un email valido");
        }
        email.reportValidity();
        return false;
    }
    return true;
}

function validarNombre() {
    
}
function validar(e) {
    if(validarNombre() && validarEmail()) {
        document.getElementById('textarea').disabled = false;
    } else {
        e.preventDefault();
    }
}
