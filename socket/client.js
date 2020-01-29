var io = require('socket.io-client');

var socket = io.connect('http://localhost:3001/', {

    reconnection: true,

});

socket.on('connect', function() {

    console.log('connected to Bot Server web socket');

    socket.on('clientEvent', data => {

        console.log(data);
        
    });

});