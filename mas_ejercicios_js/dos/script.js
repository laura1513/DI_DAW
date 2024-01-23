function muestraOculta(e) {
    var contenidos = e.previousSibling;
    while (contenidos && contenidos.nodeType !== 1) {
        contenidos = contenidos.previousSibling;
    }
    if (!contenidos) {
        console.error("No se encontró un elemento de contenido.");
        return;
    }
    if (contenidos.style.display === "none" || contenidos.style.display === " ") {
        contenidos.style.display = "block";
        e.innerHTML = "Ocultar contenidos";
    } else {
        contenidos.style.display = "none";
        e.innerHTML = "Mostrar contenidos";
    }
}