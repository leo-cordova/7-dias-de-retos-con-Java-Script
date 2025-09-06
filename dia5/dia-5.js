// arrays y coleciones.
alert("Bienvenido. vamos a hacer la lista de compras");

let listaDeCompras = {
    frutas: [],
    lacteos: [],
    carnes: [],
    cereales: []
};

let seguirAgregando = true;

while (seguirAgregando) {
    let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (1=sí/2=no)");
    if (respuesta === "1") {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría se encaja ese alimento? (frutas, lacteos, carnes, cereales)").toLowerCase();

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(alimento);
            alert(`"${alimento}" agregado a la categoría "${categoria}".`);
        } else {
            alert("Categoría no válida. Intenta de nuevo.");
        }
    } else if (respuesta === "2") {
        seguirAgregando = false;
    } else {
        alert("Por favor responde con 'sí' o 'no'.");
    }
}

// Mostrar la lista final
let mensajeFinal = "Lista de compras:\n";
for (let categoria in listaDeCompras) {
    mensajeFinal += `${categoria}: ${listaDeCompras[categoria].join(", ") || "Sin elementos"}\n`;
}
alert(mensajeFinal);