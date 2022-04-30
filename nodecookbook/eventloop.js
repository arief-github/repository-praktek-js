const app = require('http');
const fs = require('fs');
const ws = require('nodejs-websocket');

let server;

// serve static page
const handler = (req, res) => {
  fs.readFile(`${__dirname}/drawline.html`, (err, data) => {
    if(err) {
      res.writeHead(500);
      return res.end('Error loading drawline.html')
    }
    res.writeHead(200);
    res.end(data);
    return data;
  })
}

// start the web server
app.listen(8124);
app.createServer(handler);

// data timer
const startTimer = () => {
  setInterval(() => {
    const newVal = Math.floor(Math.random() * 100) + 1;
    if(server.connections.length > 0) {
      console.log(`sending ${newVal}`);
      const counter = {counter : newVal};
      server.connections.forEach(conn => {
        conn.sendText(JSON.stringify(counter), () => {
          console.log('conn sent');
        })
      })
    }
  }, 3000)
}

// create a websocket connection handler on a different port
server = ws.createServer(conn => {
  console.log('connected');
  conn.on('close', () => {
    console.log('Connection closed');
  })
})
.listen(8001, () => {
  startTimer();
})
