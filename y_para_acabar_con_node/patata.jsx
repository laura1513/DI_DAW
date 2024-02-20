const http = require('node:http');
const fs = require('node:fs');
http.createServer(function (req, res) {
    try {
        const contenido = fs.readFileSync('formulario.html', 'utf8');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(contenido);
    } catch (error) {
        console.error("Error al leer el archivo.txt:", error);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('Error interno del servidor');
    }
    res.end();
}).listen(8080, () => {
    console.log('Servidor en ejecución en el puerto 8080');
});