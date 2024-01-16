function imageSelected() {
    document.querySelector("img").click( function () {
        document.querySelector("img").css("border-width", "0");
        document.querySelector("img").css("opacity", 0.4);
        document.querySelector(this).css('border', "solid 3px pink");
        document.querySelector(this).css('opacity', 1);
    });
}