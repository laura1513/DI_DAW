function eliminarCompleta() {

    $("ul").hide();

}
function restaurar() {

    $("ul").show();

}
function anyadirFinal() {

    $("ul").append('<li>Item 0</li>');

}
function anyadirPrincipio() {

    $("ul").prepend("<li>Item 0</li>")

}
function eliminarUltimo(){

    $("li:last").remove();

}
function eliminarPrimero(){

    $("li:first").remove();

}
function eliminarPrimeroSegundo() {

    elements = $("li");
    elements[0].remove();
    elements[1].remove();

}
function eliminarDosUltimos() {

    elements = $("li");
    elements[elements.length-1].remove();
    elements[elements.length-2].remove();

}