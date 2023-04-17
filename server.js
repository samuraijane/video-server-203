const express = require('express');

const server = express();

server.get('/anna', (req, res) => {
  res.send('ANNA with `res.send`');
});

server.listen(8080, () => {
  console.log('The server is listening at PORT 8080');
});
