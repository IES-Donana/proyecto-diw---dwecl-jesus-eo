let btnenviar = document.getElementById("btnenviar");
let formulario = document.getElementById("main-contact-right");
let nombre = document.querySelector('#nombre');
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
btnenviar.addEventListener('click',validar);
/*Cuando pulsamos una tecla comprueba si es el shift*/
email.addEventListener('keydown', function (e) {
    if(e.shiftKey){
    alert("El email no puede contener mayúsculas");
    }
});


/* email.addEventListener('input',validar);
nombre.addEventListener('input',validar);
apellido.addEventListener('input',validar);  */


/* Hay que vaciar el valor de todos los elementos del formulario con setCustomValidity porque se queda guardado la cadena introducida anteriormente */
function limpiarCustomvaliditi() {
    for (const elemento of formulario.elements) {
        elemento.setCustomValidity(" ");
    }
}
//*********************Falla en el setcustomvalidity y en el pattron */
function validarEmail() { 
    limpiarCustomvaliditi();
    //Si no contiene datos validos
    if(!email.checkValidity()){
        console.log("Entra en valida email");
        if(email.validity.patternMismatch){
            email.setCustomValidity("Debes introducir un email valido");
            return false;
        }
        //Si el campo email es vacio devuelve true
        if(email.validity.valueMissing){
            email.setCustomValidity("Debes rellenar el campo email");
        return false;
        }
        //Para mandar el mensaje creado
        email.reportValidity();
    }
    return true;
}

function validarNombre() {
    limpiarCustomvaliditi();
    if(!nombre.checkValidity()){
        if(nombre.validity.valueMissing){
            console.log("Entra en valida nombre");
            nombre.setCustomValidity("Debes rellenar el campo nombre");
            return false;
        }
        nombre.reportValidity();
    }
    return true;
}
function validarApellido() {
    limpiarCustomvaliditi();
    if(!apellido.checkValidity()){
        if(apellido.validity.valueMissing){
            console.log("Entra en valida apellido");
            apellido.setCustomValidity("Debes rellenar el campo apellido");
            return false;
        }
        
    } 
    apellido.reportValidity();
    return true;
}

function validar(e) {
    if(validarEmail() && validarNombre() &&  validarApellido()) {
        console.log("Entra en validar todo true");
        document.getElementById('textarea').disabled = false;
    } else {
        console.log("Entra en prevent");
        e.preventDefault();
    }
}
