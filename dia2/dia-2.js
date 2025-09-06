// entender cómo capturar y almacenar valores dentro de variables.

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Cuál es tu lenguaje de programación favorito?");

alert("Tu nombre es " + nombre + ", tienes " + edad + " años y tu lenguaje de programación favorito es " + lenguaje + ".");

let resultado;
do {
    resultado = prompt("¿Te gusta estudiar " + lenguaje + "? responde 1 para SI, 2 para NO");
    if (resultado === "1") {
    alert ("!MUY BIEN¡ sigue así " + nombre + ", y tendrás mucho éxito");
    } else if (resultado === "2") {
    alert ("oh, que pena... Ya intentaste aprender otros lenguajes?");
    } else {
    alert ("Por favor, responde con 1 para SI o 2 para NO");
    }
} while (resultado !== "1" && resultado !== "2");