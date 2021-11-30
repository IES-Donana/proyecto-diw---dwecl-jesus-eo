let btnenviar = document.getElementById("btnenviar");
btnenviar.addEventListener('click',validar);

let email = document.getElementById("email");
/*Cuando pulsamos una tecla comprueba si es el shift*/
email.addEventListener('keydown', function (e) {
    if(e.shiftKey){
    alert("El email no puede contener mayúsculas");
    }
});
let nombre = document.querySelector('#nombre');
let apellido = document.getElementById("apellido");

/*email.addEventListener('input',validar);
nombre.addEventListener('input',validar);
apellido.addEventListener('input',validar);*/

let todoValidado = false;
function validarNombre() {
    console.log("entra");
    if(!nombre.checkValidity()) {
        nombre.validationMessage;
    }
}

function validarEmail() { 
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

function validar(e) {
    if(!validarNombre() && validarEmail()) {
        e.preventDefault();
    } else {
        document.getElementById('textarea').disabled = false;
    }
}
