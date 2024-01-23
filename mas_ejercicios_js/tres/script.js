function muestraOculta(event) {
    var enlace = event.target;
    var contenidos = enlace.previousElementSibling;
    while (contenidos && contenidos.nodeType !== 1) {
        contenidos = contenidos.previousElementSibling;
    }
    if (!contenidos) {
        console.error("No se encontró un elemento de contenido.");
        return;
    }
    if (contenidos.style.display === "none" || contenidos.style.display === " ") {
        contenidos.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    } else {
        contenidos.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    }
}