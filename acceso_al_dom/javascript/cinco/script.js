$(document).ready(function(){
    $("td").click(function(){
        var a = prompt("Intoduce un valor para la celda", "").valueOf();
        $(this).text(a);
    });
    $("td").mouseenter(function () {
        $(this).css('background-color', 'red');
    });
    $("td").mouseleave(function () {
        $(this).css('background-color', 'white');
    });
});