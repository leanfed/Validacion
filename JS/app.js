import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //regresa un arreglo

inputs.forEach( input => {
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    })
})
