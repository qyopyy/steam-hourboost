const http = require('http');

function keep_alive() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running.');
  });

  server.listen(3000, () => {
    console.log('Server is running on port 3000.');
  });
}

module.exports = keep_alive;
