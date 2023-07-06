const {io} = require('../index');

// Messages
io.on('connect', client => {
    console.log('Client connected');    

    client.on('disconnect',() => {
        console.log('Client disconnected');
    });

    client.on('message',(payload) => {
        console.log('Client:', payload);
        
        io.emit('message', { admin: 'Welcome'});
    });
});