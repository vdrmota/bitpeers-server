//server.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
   console.log('connection');

  socket.on('emit_blockchain', function (blockchain) {
    io.sockets.emit('receive_blockchain', blockchain)
  });

});

http.listen(1337, function () {
  console.log('listening on *:1337');
});
