// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const server = express();
const adoptersRouter = require('./adopters/adopters-router')
const dogRouter = require('./dogs/dogs-router')

server.use(express.json());
server.use('/api/adopters', adoptersRouter)
server.use('/api/dogs', dogRouter)

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
