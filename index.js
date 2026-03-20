const Server = require('./models/server');

const server = new Server();

server.execute();

// io.on('connection', ( socket ) => { 
//     // Recibir data desde el cliente
//     socket.on('mensaje-to-server', ( data ) => {
//         console.log(data);

//         // Enviar mensaje a todos los clientes conectados
//         io.emit('mensaje-from-server', data);
//     })
// });

