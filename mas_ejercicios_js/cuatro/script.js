document.addEventListener('mousemove', function(event) {
    var screenX = event.screenX;
    var screenY = event.screenY;
    var pageX = event.pageX;
    var pageY = event.pageY;
    var clientX = event.clientX;
    var clientY = event.clientY;
    document.getElementById('coordinates').innerHTML =
        'Coordenadas del Ratón: ' +
        '<br>screenX: ' + screenX + ', screenY: ' + screenY + '<br>' +
        'pageX: ' + pageX + ', pageY: ' + pageY + '<br>' +
        'clientX: ' + clientX + ', clientY: ' + clientY;
});