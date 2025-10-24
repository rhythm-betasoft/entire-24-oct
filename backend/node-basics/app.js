const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to Home Page!');
  } else if (req.url === '/about') {
    res.end('This is About Page.');
  } else {
    res.end('Page Not Found!');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
