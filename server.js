const express = require('express');
const { renderFile } = require('./middleware');

const server = express();

// server.use(renderFile);

server.get('/anna', (req, res) => {
  res.send('ANNA with `res.send`');
});

server.get('/billy', (req, res) => {
  res.json({
    message: 'BILLY with `res.json`'
  });
});


server.get('/carlos', (req, res) => {
  res.sendFile('./files/carlos.txt', {root: __dirname})
});

// old way
// server.get('/david', (req, res) => {
//   res.sendFile('./files/david.html');
// });

// new way
server.get('/david', renderFile, (req, res) => {
  res.renderFile('david');
});

server.listen(8080, () => {
  console.log('The server is listening at PORT 8080');
});
