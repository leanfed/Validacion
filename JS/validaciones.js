

/* const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento)=>{
   validarNacimiento(evento.target);
}) */   // Linea 3 a 6 son mejoradas en código con los data atributes del html-->

export function valida(input){
const tipoDeInput = input.dataset.tipo;
if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input);
}
if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
} else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
}
};

const tiposDeErrores = [
"valueMissing",
"typeMismatch",
"patternMismatch", 
"customError",
];

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";

    tiposDeErrores.forEach(error => {
if(input.validity[error]){
    mensaje = mensajesError[tipoDeInput][error];
}
    });

    return mensaje;
}


const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Mayúsculas, minúsculas, número y sin caracteres especiales",
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener 18 años o más",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Formato requerido: max 10 números",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 y 40 caracteres",
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Este campo debe contener de 4 hasta 30 caracteres",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Este campo debe contener de 4 hasta 30 caracteres",
    },
}

const validadores = {
nacimiento: (input) => validarNacimiento(input), 
};

function validarNacimiento(input){
   const fechaCliente = new Date(input.value);
   let mensaje = ""
    if(!mayorDeEdad(fechaCliente)){
      mensaje = "Debes ser mayor de edad"
    }

    input.setCustomValidity(mensaje)

}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate());;
    return diferenciaFechas <= fechaActual;
}


     
