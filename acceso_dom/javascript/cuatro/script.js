document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#ocultar").click(function(){
        document.querySelector("img").fadeTo(0, 0.1);
    });
    document.querySelector("img").click(function(){
        document.querySelector(this).fadeTo(0, 0.1);
    });
    document.querySelector("#mostrar").click(function () {

        document.querySelector("#img1").fadeTo(0, 1);
        document.querySelector("#img2").fadeTo(1000, 1);
        document.querySelector("#img3").fadeTo(2000, 1);
        document.querySelector("#img4").fadeTo(3000, 1);
        document.querySelector("#img5").fadeTo(4000, 1);
        document.querySelector("#img6").fadeTo(5000, 1);
        document.querySelector("#img7").fadeTo(6000, 1);
        document.querySelector("#img8").fadeTo(7000, 1);
    });
});