function informacion(elEvento) {
    var evento = elEvento || window.event;
    var x = evento.clientX;
    var y = evento.clientY;
    var dimensiones = tamanoVentanaNavegador();
    var anchoVentana = dimensiones[0];
    var altoVentana = dimensiones[1];
    var izquierda = anchoVentana / 2;
    var arriba = altoVentana / 2;
    var zona;
    if (x < izquierda) {
        if (y < arriba) {
            zona = "Izquierda Arriba";
        } else {
            zona = "Izquierda Abajo";
        }
    } else {
        if (y < arriba) {
            zona = "Derecha Arriba";
        } else {
            zona = "Derecha Abajo";
        }
    }
    muestraInformacion(["Zona de Clic", zona]);
}
function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}
function tamanoVentanaNavegador() {
    var dimensiones = [];

    if (typeof (window.innerWidth) == 'number') {
        dimensiones = [window.innerWidth, window.innerHeight];
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
    }

    return dimensiones;
}
document.onclick = informacion;