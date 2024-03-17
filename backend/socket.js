// socket.js

const socketIO = require('socket.io');

// Function to set up Socket.io connection
function setupSocket(server) {
    const io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('A user connected to the socket');

        // Add event listeners or handlers here

        socket.on('disconnect', () => {
            console.log('A user disconnected from the socket');
        });
    });

    return io;
}

module.exports = setupSocket;
