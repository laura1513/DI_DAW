function imageSelected() {
    $("img").click( function () {
        $("img").css("border-width", "0");
        $("img").css("opacity", 0.4);
        $(this).css('border', "solid 2px red");
        $(this).css('opacity', 1);
    });
}