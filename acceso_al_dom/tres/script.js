var cont = 0;
function mostrar() {
    $("img").click( function () {
        $(this).css('opacity', 1);
        if (cont === 2) {
            $("img").click( function () {
                $(this).css('opacity', 1);
                cont = 0;
            })
        }
    });
}