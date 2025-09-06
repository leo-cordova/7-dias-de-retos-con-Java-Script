// Estructuras de control de flujo

let nombre = "";
let area = "";
let tecnologia = "";
let decisionFinal = "";

nombre = prompt("¿Cuál es tu nombre?");
alert(`Hola ${nombre}, bienvenido.`);

area = prompt("¿Qué área deseas seguir: Front-end o Back-end?");

// elegir la tecnologia segun su area preferida.
if (area === "front-end") {
    tecnologia = prompt("¿Qué tecnología deseas aprender en Front-end: React o Vue?");
    alert("¡Genial! Aprender " + tecnologia + " te abrirá muchas puertas en el desarrollo Front-end.");
} else if (area === "back-end") {
    tecnologia = prompt("¿Qué tecnología deseas aprender en Back-end: C# o Java?");
    alert("¡Genial! Aprender " + tecnologia + " te abrirá muchas puertas en el desarrollo Back-end.");
} else {
    alert("Área no reconocida, intentalo nuevamente");
}

// elegir la decision de especializarce o convertirse en Fullstack
decisionFinal = prompt(`¿Deseas seguir especializándote en ${area} o convertirte en Fullstack?`);

if (decisionFinal === "fullstack") {
    alert("¡Ser Fullstack te permitirá trabajar en todos los aspectos de una aplicación!");
} else {
    alert(`¡Especializarte en ${area} te llevará a ser un experto en esa área!`);
}

// el usuario quiere aprender nuevas tecnologias.

let seguir = "ok";
while (seguir === "ok") {
    let nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    if (nuevaTecnologia) {
        alert(`¡${nuevaTecnologia} es una excelente elección para ampliar tus conocimientos!`);
    }
    seguir = prompt("¿Quieres agregar otra tecnología? (ok para continuar)");
}

alert(`¡Gracias por participar ${nombre}! Sigue aprendiendo y creciendo como desarrollador.`);