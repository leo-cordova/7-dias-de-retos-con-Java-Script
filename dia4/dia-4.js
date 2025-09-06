// juego de adivinación
let numero = Math.floor(Math.random() * 10) + 1;
let intentos = 3;
let numeroUsuario = 0;

alert("¡Bienvenido al juego de adivinanza de números! Tienes 3 intentos para adivinar el número entre 1 y 10.");

while (intentos > 0) {
    numeroUsuario = parseInt(prompt("Introduce un número entre 1 y 10:"));
    if (numeroUsuario === numero) {
        alert("¡Felicidades! Has adivinado el número.");
        break;
    } else if (numeroUsuario < numero) {
        intentos--;
        alert(`Incorrecto, el numero es mayor. Te quedan ${intentos} intentos.`);
    } else {
        intentos--;
        alert(`Incorrecto, el numero es menor. Te quedan ${intentos} intentos.`);
    }
}

if (intentos === 0) {
    alert(`Lo siento, has perdido. El número era ${numero}. Actualiza la pagina y hagámoslo de nuevo!`);
}