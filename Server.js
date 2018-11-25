const express = require('express');


const app = express();



const server = app.listen(Process.env.PORT || 3000, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('SEND_MESSAGE',(data) =>{
    console.log(data);
    io.emit('MESSAGE', {personalMsg: 'It works! Maybe ' + data });
  });
});
