import {createServer} from "node:http";
const server = createServer((request, response) => {
    console.log("Request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    response.end("<html><body><h1>The server is ON and ready!</h1><p>Secondary text</p></body></html>");
});

server.listen(3000, () => {
    console.log(`Server running on the following link: http://localhost:3000`)
});