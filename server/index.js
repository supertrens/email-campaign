const express = require('express');
const server = express();

server.get('/' , (request , response) => {
  response.send({ HI : 'Peter'});
});

server.listen(5000);
