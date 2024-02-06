var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
}).listen(8080);
function mostrarMensaje() {
    setInterval(() => {
        console.log("Soy un pesado qu se ejecuta cada 2 segundos");
    }, 2000);
}
mostrarMensaje();