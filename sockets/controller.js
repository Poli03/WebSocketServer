

const socketController = (socket) =>{
    console.log('Cliente Conectado', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Desconectado');
    });

    socket.on('send-message', (payload,callback) => {
        const msg ='Recibido';
        callback(msg)
        socket.broadcast.emit('send-message',payload);
    })
}

module.exports = {
    socketController
}