var http = require('http');
function mostrarMensaje() {
    console.log('ID del proceso:', process.pid);
    console.log('Título del proceso:', process.title);
    console.log('Versión de Node.js:', process.version);
    console.log('Sistema operativo:', process.platform);

}
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
}).listen(8080);
mostrarMensaje();