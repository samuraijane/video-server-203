const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const server = express();

server.use(express.static(__dirname + "/public"));

server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');

server.get('/', (req, res) => {
  res.render('index', {
    partials: {
      footer: 'partials/footer',
      header: 'partials/header',
      main: 'partials/main'
    }
  });
});

server.get('/heartbeat', (req, res) => {
  res.json({"is": "working"});
});

server.listen(8080, () => {
  console.log('The server is listening at PORT 8080');
});
