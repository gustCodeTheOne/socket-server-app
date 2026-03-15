// Servidor de Express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

// Desplegar el directorio publico
app.use(express.static( __dirname + '/public'));

io.on('connection', ( socket ) => { 
    // Recibir data desde el cliente
    socket.on('mensaje-to-server', ( data ) => {
        console.log(data);

        // Enviar mensaje a todos los clientes conectados
        io.emit('mensaje-from-server', data);
    })
});

server.listen(8080, () => {
    console.log('Server corriendo en puerto : 8080');
});