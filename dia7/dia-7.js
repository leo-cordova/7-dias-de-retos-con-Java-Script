// calculadora basica.
let operación = "";
let nombre = prompt("¡Bienvenido a la calculadora básica! ¿cual es tu nombre?:");
alert(`Hola ${nombre}, puedes realizar las siguientes operaciones: suma, resta, multiplicación, división. Escribe "salir" para cerrar la calculadora.`);

// función suma.
function suma() {
    let num1 = parseFloat(prompt("¿Cuál es el primer número?"));
    let num2 = parseFloat(prompt("¿Cuál es el segundo número?"));
    let resultado = num1 + num2;
    alert(`El resultado de ${num1} + ${num2} es: ${resultado}`);
}

// función resta.
function resta() {
    let num1 = parseFloat(prompt("¿Cuál es el primer número?"));
    let num2 = parseFloat(prompt("¿Cuál es el segundo número?"));
    let resultado = num1 - num2;
    alert(`El resultado de ${num1} - ${num2} es: ${resultado}`);
}

// funcion multiplicación.
function multiplicacion() {
    let num1 = parseFloat(prompt("¿Cuál es el primer número?"));
    let num2 = parseFloat(prompt("¿Cuál es el segundo número?"));
    let resultado = num1 * num2;
    alert(`El resultado de ${num1} * ${num2} es: ${resultado}`);
}

// función división.
function division() {
    let num1 = parseFloat(prompt("¿Cuál es el primer número?"));
    let num2 = parseFloat(prompt("¿Cuál es el segundo número?"));
    if (num2 !== 0) {
        let resultado = num1 / num2;
        alert(`El resultado de ${num1} / ${num2} es: ${resultado}`);
    } else {
        alert("Error: División por cero no permitida.");
    }
}

do {
    operación = prompt(`¿Qué operación deseas realizar ${nombre}? (suma, resta, multiplicación, división) o ¿deseas cerrar la calculadora? (salir)`);
    if (!operación) break;
    operación = operación.toLowerCase();

    if (operación === "suma") {
        suma();
    } else if (operación === "resta") {
        resta();
    } else if (operación === "multiplicación") {
        multiplicacion();
    } else if (operación === "division" || operación === "división") {
        division();
    } else if (operación === "salir") {
        alert(`Gracias por usar la calculadora, ${nombre}. ¡Hasta la próxima!`);
    } else {
        alert(`Operación no reconocida ${nombre}. Intenta de nuevo.`);
    }
} while (operación !== "salir");