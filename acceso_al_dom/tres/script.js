function mostrar() {
    $("img").click( function () {
        $("img").css("opacity", 0);
        $(this).css('opacity', 1);
    });
}