import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Server } from 'socket.io'; // Correct import
import http from 'http';

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS for Express
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO with CORS options
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('sendMessage', (msg) => {
    io.emit('receiveMessage', msg);
  });
});

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
