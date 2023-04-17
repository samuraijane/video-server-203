const express = require('express');
const { prepFileToSend } = require('./middleware');

const server = express();

// server.use(prepFileToSend);

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
//   res.sendFile('./files/david.html', {root: __dirname});
// });

// new way
server.get('/david', prepFileToSend, (req, res) => {
  res.fileToShow('david');
});

server.listen(8080, () => {
  console.log('The server is listening at PORT 8080');
});
