const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;
require('./routes/authRoutes')(server);
require('./services/passport') // Make it execute


server.listen(PORT);
