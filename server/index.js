const express = require('express');
const server = express();

server.get('/' , (request , response) => {
  response.send({ HI : 'Peter'});
});


const PORT = process.env.PORT || 5000;
server.listen(PORT);
