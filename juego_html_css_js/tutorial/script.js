var canvas, ctx;
var naveX = 0;
var naveY = 0;
var nave = new Image();
var fondoNave = new Image();
var contador = 40;
var tiempo = new Date(15000);
var stop;
function canvasStars() {
    canvas = document.getElementById("miCanvas");
    ctx = canvas.getContext("2d");
    pintarFondo();
    pintarNave();
    pintarBase();
    pintarAsteroides();
    window.addEventListener('keydown', moverNave, true);
    temporizador();
}

function pintarFondo() {
    ctx.fillStyle = "#071254";
    ctx.beginPath();
    ctx.rect(0, 0, 600, 600);
    ctx.closePath();
    ctx.fill();

    for (i = 0; i < 100; i++) {
        var x = Math.random() * 600;
        var y = Math.random() * 600;

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    fondoNave = ctx.getImageData(0, 0, 30, 30);
}
function pintarNave() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.rect(0, 0, 30, 30);
    ctx.closePath();
    ctx.fill();
    nave = ctx.getImageData(0, 0, 30, 30);
}
function pintarBase() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(570, 570, 30, 30);
    ctx.closePath();
    ctx.fill();
}
function pintarAsteroides() {
    for (i=0; i<40; i++){
        var x = Math.random() * 570;
        var y = Math.random() * 570;
        if (x < 30 && y < 30){
            x = x + 30;
            y = y + 30;
        }
        if (x > 540 && y > 540){
            x = x - 30;
            y = y - 30;
        }
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.rect(x, y, 20, 20);
        ctx.closePath();
        ctx.fill();
    }
}
function moverNave(e) {
    switch (e.keyCode) {
        case 37:
        case 65:
            actualizarContador();
            if (naveX == 0) {
                break;
            }
            ctx.putImageData(fondoNave, naveX, naveY);
            naveX = naveX - 30;
            fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
            ctx.putImageData(nave, naveX, naveY);
            detectarColision();
            break;
        case 39:
        case 68:
            actualizarContador();
            if (naveX == 570) {
                break;
            }
            ctx.putImageData(fondoNave, naveX, naveY);
            naveX = naveX + 30;
            fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
            ctx.putImageData(nave, naveX, naveY);
            detectarColision();
            break;
        case 38:
        case 87:
            actualizarContador();
            if (naveY == 0) {
                break;
            }
            ctx.putImageData(fondoNave, naveX, naveY);
            naveY = naveY - 30;
            fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
            ctx.putImageData(nave, naveX, naveY);
            detectarColision();
            break;
        case 40:
        case 83:
            actualizarContador();
            if (naveY == 570) {
                break;
            }
            ctx.putImageData(fondoNave, naveX, naveY);
            naveY = naveY + 30;
            fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
            ctx.putImageData(nave, naveX, naveY);
            detectarColision();
            break;
    }
}
function actualizarContador() {
    contador--;
    var puntos = document.getElementById("puntuacion");
    puntos.innerHTML = contador;
    if (contador < 6) {
        puntos.style.color = "red";
    } else if (contador < 11) {
        puntos.style.color = "orange"
    } else {
        puntos.style.color = "#0F0";
    }
    if (contador == 0) {
        var msg = "Te has quedado sin puntos. Pulsa aquí para reiniciar."
        finalizar(msg);
    }
}
function detectarColision() {
    var pixels = 900;
    var elementos = 900 * 4;
    for (var i = 0; i < elementos; i += 4) {
        if (fondoNave.data[i] == 255 && fondoNave.data[i+1] == 0 && fondoNave.data[i+2] == 0) {
            var msg =  "Has chocado contra un asteroide. Pincha aquí para reiniciar"
            finalizar(msg);
            break;
        }
        if (fondoNave.data[i] == 0 && fondoNave.data[i+1] == 0 && fondoNave.data[i+2] == 255) {
            var msg =  "¡Has llegado a la base! Pincha aquí para reiniciar."
            finalizar(msg);
            break;
        }
    }
}
function finalizar(mensaje) {
    var msg = document.getElementById("mensaje");
    msg.innerHTML = mensaje;
    window.removeEventListener("keydown", moverNave, true);
    clearTimeout(stop);
}
function reiniciar() {
    window.location.reload();
}
function temporizador() {
    var ms = tiempo.getMilliseconds() - 500;
    tiempo.setMilliseconds(ms);
    var txt = rellenaCeros(tiempo.getMinutes()) + ":" + rellenaCeros(tiempo.getSeconds());
    var spantiempo = document.getElementById("tiempo");
    spantiempo.innerHTML = txt;
    if (tiempo.getSeconds() < 6) {
        spantiempo.style.color = "red";
    } else if (tiempo.getSeconds() < 11) {
        spantiempo.style.color = "orange";
    } else {
        spantiempo.style.color = "#0F0";
    }
    if (tiempo.getSeconds() <= 0) {
        var msg = "Se ha terminado el tiempo. Pulsa aquí para reiniciar"
        finalizar(msg);
    } else {
        stop = setTimeout(temporizador, 500);
    }
}
function rellenaCeros(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}