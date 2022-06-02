const lbOnline  = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txMessage = document.querySelector('#txMessage');
const btSend    = document.querySelector('#btSend');
 
const socket = io();

socket.on('connect', () =>{
    console.log(' Conectado ');

    lbOffline.style.display = 'none';
    lbOnline.style.display = '';
});

socket.on('disconnect', () =>{
    console.log(' Conectado ');

    lbOffline.style.display = '';
    lbOnline.style.display = 'none';
});

socket.on('send-message', (payload) =>{
    console.log(payload);
});

btSend.addEventListener('click', () =>{
    const message = txMessage.value;
    const payload = {
        message,
        id: '123',
        fecha: new Date().getTime()
    }

    socket.emit('send-message', payload, (msg) => {
        console.log('Respuesta del servidor: ', msg);
    });
});