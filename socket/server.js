var io = require('socket.io').listen(3001);

io.on('connection', function(socket) {
    
    console.log('connected to Bot Client');

    console.log(socket.id);

    socket.emit('clientEvent', 'Sending Message to All Client');

    io.to(socket.id).emit('clientEvent', 'Sending Message to One Client using socket id');

    socket.on('disconnect', function() {

        console.log(socket.id, "Removed");

    })

});