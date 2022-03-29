'use strict';

const webSocketServer = require('websocket').server;
const http = require('http');
const axios = require('axios');
const { port, url } = require('./config');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Spinning the http server and the websocket server.
const server = http.createServer(app);
server.listen(port);
const wsServer = new webSocketServer({
  httpServer: server
});


wsServer.on('request', (request) => {
  const connection = request.accept();

  connection.on('message', async (message) => {
    const query = message.utf8Data;

    let response = null;
    if(query === 'Hi') response = 'I share facts related to Cats... Meow!';
    else {
      const apiResponse = await getResponse();
      response = apiResponse.data.fact;
    }

    connection.sendUTF(JSON.stringify({ message:  response }));
  });

  connection.on('close', function (reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});


const getResponse = () => {
  return axios.get(url);
};