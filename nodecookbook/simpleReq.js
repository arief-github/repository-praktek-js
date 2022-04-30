// create node app that can respond to very basic browser
// load http server
const http = require('http');
const url = require('url');

// create http server
http.createServer((req, res) => {
  const {query} = url.parse(req.url, true);
  // content header
  res.writeHead(200, {'content-type': 'text-plain'});
  // write message and signal communication is complete
  const name = query.first ? query.first : 'world';
  res.end(`Hello ${name}`)
}).listen(8124);

console.log(`Server running on port 8124`);
