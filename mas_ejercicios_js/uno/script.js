function muestraOculta(e, c) {
    if (c.style.display === "none" || c.style.display === " ") {
        c.style.display = "block";
        e.innerHTML = "Ocultar contenidos";
    } else {
        c.style.display = "none";
        e.innerHTML = "Mostrar contenidos";
    }
}