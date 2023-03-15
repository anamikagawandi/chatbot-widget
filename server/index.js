'use strict';

const webSocketServer = require('websocket').server;
const http = require('http');
const axios = require('axios');
const { port, url } = require('./config');
const express = require('express');
const path = require('path');
const app = express();
try {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

  // Spinning the http server and the websocket server.
  const server = http.createServer(app);

  server.listen(port);
  const wsServer = new webSocketServer({
    httpServer: server
  })



  wsServer.on('request', (request) => {
    const connection = request.accept();

    connection.on('message', async (message) => {
      const query = message.utf8Data;

      let response = null;
      if (query === 'Hi') response = 'I will translate your text to klingon!';
      else {
        const apiResponse = await getResponse(query);
        response = apiResponse.data.contents.translated;
      }

      connection.sendUTF(JSON.stringify({ message: response }));
    });

    connection.on('close', function (reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
  });


  const getResponse = (message) => {
    return axios.post(url, { text: message });
  };

} catch (error) {
  console.log(error)
};