// Create web server
// Run the server
// Listen to the port
// Create a route
// Send response to the route
// Create another route
// Send response to the route
// Create a 404 route
// Send response to the 404 route

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (path === '/comments') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Comments');
        res.end();
    } else if (path === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Contact');
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.write('404 Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});