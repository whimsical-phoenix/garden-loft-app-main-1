const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Relay 'offer' messages
  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
  });

  // Relay 'answer' messages
  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
  });

  // Relay 'candidate' messages
  socket.on('candidate', (candidate) => {
    socket.broadcast.emit('candidate', candidate);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));