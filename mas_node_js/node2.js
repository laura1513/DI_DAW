var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    function mostrarMensaje() {
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                console.log("Node.js es muy chulo " + i);
            }
        }, 2000);
    }
    res.end(mostrarMensaje());
}).listen(8080);