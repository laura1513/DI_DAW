function contador() {
    var caja = document.getElementById('texto');
    var restantes = 100 - caja.value.length;
    var cont = document.getElementById('restantes');
    cont.textContent = restantes;
}
function controlarCaracteres(event) {
    var caja = document.getElementById('texto');
    var restantes = 100 - caja.value.length;

    if (restantes <= 0) {
        if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            return true;
        } else {
            event.preventDefault();
        }
    }
}