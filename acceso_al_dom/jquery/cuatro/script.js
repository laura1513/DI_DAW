$(document).ready(function(){
    $("#ocultar").click(function(){
        $("img").fadeTo(0, 0.1);
    });
    $("img").click(function(){
        $(this).fadeTo(0, 0.1);
    });
    $("#mostrar").click(function () {

        $("#img1").fadeTo(0, 1);
        $("#img2").fadeTo(1000, 1);
        $("#img3").fadeTo(2000, 1);
        $("#img4").fadeTo(3000, 1);
        $("#img5").fadeTo(4000, 1);
        $("#img6").fadeTo(5000, 1);
        $("#img7").fadeTo(6000, 1);
        $("#img8").fadeTo(7000, 1);
    });
});