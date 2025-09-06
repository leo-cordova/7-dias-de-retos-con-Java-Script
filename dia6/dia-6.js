// Programa que permite al usuario crear y gestionar una lista de compras
let listaDeCompras = {
    frutas: [],
    lacteos: [],
    carnes: [],
    cereales: []
};

let seguirAgregando = true;

function hayElementosEnLista(lista) {
    return Object.values(lista).some(arr => arr.length > 0);
}

while (seguirAgregando) {
    let opciones = "¿Qué deseas hacer?\n1 = Añadir alimento\n";
    opciones += hayElementosEnLista(listaDeCompras) ? "2 = Eliminar alimento\n" : "";
    opciones += "3 = Salir";
    let respuesta = prompt(opciones);

    if (respuesta === "1") {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría se encaja ese alimento? (frutas, lacteos, carnes, cereales)").toLowerCase();

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(alimento);
            alert(`"${alimento}" agregado a la categoría "${categoria}".`);
        } else {
            alert("Categoría no válida. Intenta de nuevo.");
        }
    } else if (respuesta === "2" && hayElementosEnLista(listaDeCompras)) {
        // Mostrar lista actual
        let mensaje = "Lista actual:\n";
        for (let categoria in listaDeCompras) {
            mensaje += `${categoria}: ${listaDeCompras[categoria].join(", ") || "Sin elementos"}\n`;
        }
        alert(mensaje);

        let categoria = prompt("¿De qué categoría deseas eliminar el alimento? (frutas, lacteos, carnes, cereales)").toLowerCase();
        if (listaDeCompras.hasOwnProperty(categoria) && listaDeCompras[categoria].length > 0) {
            let alimento = prompt(`¿Qué alimento deseas eliminar de la categoría "${categoria}"?`);
            let indice = listaDeCompras[categoria].indexOf(alimento);
            if (indice !== -1) {
                listaDeCompras[categoria].splice(indice, 1);
                alert(`"${alimento}" eliminado de la categoría "${categoria}".`);
            } else {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        } else {
            alert("Categoría no válida o sin elementos.");
        }
    } else if (respuesta === "3") {
        seguirAgregando = false;
    } else {
        alert("Por favor selecciona una opción válida.");
    }
}

// Mostrar la lista final
let mensajeFinal = "Lista de compras:\n";
for (let categoria in listaDeCompras) {
    mensajeFinal += `${categoria}: ${listaDeCompras[categoria].join(", ") || "Sin elementos"}\n`;
}
alert(mensajeFinal);