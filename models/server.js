const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const path      = require('path');
const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;

        // Http server
        this.server = http.createServer(this.app);

        // Configuraciones del server
        this.io = socketio(this.server, { /* configuraciones */ });
    }

    configurarSockets() {
        new Sockets( this.io );
    }

    middlewares() {
        // Desplegar el directorio publico
        this.app.use(express.static( path.resolve( __dirname, '../public' ) ));
    }

    execute() {

        // Inicializar middlewares
        this.middlewares();

        // Inicializar Sockets
        this.configurarSockets();

        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto : ' + this.port );
        });
    }
}


module.exports = Server;