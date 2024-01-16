document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("td").click(function(){
        var a = prompt("Intoduce un valor para la celda", "").valueOf();
        document.querySelector(this).text(a);
    });
    document.querySelector("td").mouseenter(function () {
        document.querySelector(this).css('background-color', 'red');
    });
    document.querySelector("td").mouseleave(function () {
        document.querySelector(this).css('background-color', 'white');
    });
});