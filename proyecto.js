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



nombre.addEventListener('input',validar);
apellido.addEventListener('input',validar); 
email.addEventListener('input',validar);

/* Hay que vaciar el valor de todos los elementos del formulario con setCustomValidity porque se queda guardado la cadena introducida anteriormente */
function limpiarCustomvaliditi() {
    for (const elemento of formulario.elements) {
        elemento.setCustomValidity("");
    }
}

function validarEmail() { 
    limpiarCustomvaliditi();
    //Si no contiene datos validos
    if(!email.checkValidity()){
        console.log("Entra en valida email");
        if(email.validity.patternMismatch){
            email.setCustomValidity("Debes introducir un email valido");
        }
        //Si el campo email es vacio devuelve true
        if(email.validity.valueMissing){
            email.setCustomValidity("Debes rellenar el campo email");
        }
        //Para mandar el mensaje creado
        email.reportValidity();
        return false;
    }
    return true;
}

function validarNombre() {
    limpiarCustomvaliditi();
    if(!nombre.checkValidity()){
        if(nombre.validity.valueMissing){
            console.log("Entra en valida nombre");
            nombre.setCustomValidity("Debes rellenar el campo nombre");
            nombre.reportValidity();
            return false;
        }
        
    }
    return true;
}
function validarApellido() {
    limpiarCustomvaliditi();
    if(!apellido.checkValidity()){
        if(apellido.validity.valueMissing){
            console.log("Entra en valida apellido");
            apellido.setCustomValidity("Debes rellenar el campo apellido");
            apellido.reportValidity();
            return false;
        }  
    } 
    return true;
}

function validar(e) {
    limpiarCustomvaliditi();
    if(validarNombre() &&  validarApellido() && validarEmail()) {
        console.log("Entra en validar todo true");
        document.getElementById('textarea').disabled = false;
    } else {
        console.log("Entra en prevent");
        e.preventDefault();
    }
}


/**
 * 
 * 
 * Menu hamburguesa
 */

 let iconoBurguer = document.querySelector(".icono-burguer");


 iconoBurguer.addEventListener("click",comprobarExistenciaDiv);
/*  iconoBurguer.addEventListener("click",cambiarClases); */
 
/**
 * Creando elementos
 */
/*Creo el div*/
 

function CreaInserta() {
    let divNavBurguer = document.createElement("div");
/*Creo el div y le inserto las clases*/
 
 /*Creo varias clases mejor con classList qeu con className*/
 divNavBurguer.classList.add("nav-burguer-off", "nav-burguer");
/*Creo enlaces con su contenido y el href y lo introduzco dentro del div*/
let enlace1 = document.createElement("a");
enlace1.setAttribute("href","#mis proyectos");
enlace1.textContent = "Mis proyectos";
divNavBurguer.appendChild(enlace1);

let enlace2 = document.createElement("a");
enlace2.setAttribute("href","#testimonios");
enlace2.textContent = "Testimonios";
divNavBurguer.appendChild(enlace2);

let enlace3 = document.createElement("a");
enlace3.setAttribute("href","#contacto");
enlace3.textContent = "Contacto";
divNavBurguer.appendChild(enlace3);

let enlace4 = document.createElement("a");
enlace4.setAttribute("href","#sobre mi");
enlace4.textContent = "Sobre mi";
divNavBurguer.appendChild(enlace4);

let enlace5 = document.createElement("a");
enlace5.setAttribute("href","curriculum.html");
enlace5.textContent = "Curriculum";
divNavBurguer.appendChild(enlace5);

/*Lo introduzco en el html después del icono de la hamburguesa */
let containerBurguer = document.getElementById('container-burguer');
console.log(divNavBurguer);

/*Para insertarlo hay que hacer referencia a un elemento que ya existe es decir el elemento que llama a insertAdjacentElement()*/
containerBurguer.insertAdjacentElement("afterend", divNavBurguer);
} 

function borrarElemento(){

  document.querySelector(".nav-burguer").remove();
}




function cambiarClases() {
    console.log("entra");
    document.querySelector(".nav-burguer").classList.toggle("nav-burguer-on");
    document.querySelector(".nav-burguer").classList.toggle("nav-burguer-off");
}

/*Si existe la clase nav-burguer-on crea los elementos*/
function comprobarExistenciaDiv() {
    console.log(document.querySelector(".nav-burguer"));
    let x = document.querySelector(".nav-burguer");
    if (x) {
        borrarElemento();
    }else {
        CreaInserta();
        setTimeout(cambiarClases(),2000);
    }
    
}