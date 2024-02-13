const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    try {
        const contenido = fs.readFileSync('y_para_acabar_con_node/pagina_erasmus/erasmusCastellano/index_castellano.html', 'utf8');
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