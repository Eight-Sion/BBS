let http = require("http");
const port = 8080;
const logger = fun => console.log(`[${new Date()}] ${fun.call(null)}`);

const server = http.createServer((request, response) => {
    request.setEncoding("utf-8");

    request.on("data", chunk => {
        logger(() => `received data[${chunk}]`);

        const data = JSON.parse(chunk);

        const operator = data["operator"];
        const a = data["a"];
        const b = data["b"];

        const responseSender = d => response.end(JSON.stringify(d));

        if (operator === "+") {
            responseSender({ result: a + b});
        } else if (operator === "-") {
            responseSender({ result: a - b});
        } else if (operator === "*") {
            responseSender({ result: a * b});
        } else if (operator === "/") {
            responseSender({ result: a / b});
        } else {
            logger(() => "Bad Request");
            response.statusCode = 400;
            responseSender({ message: `Unknown Operator[${operator}]` });
        }
    });
});
server.on("request", (request, response) => {
    const socket = request.socket;
    logger(() => `client connected[${socket.remoteAddress}:${socket.remotePort}] URL[${request.url} ${request.httpVersion}] Method[${request.method}]`);
});

server.listen(port);

logger(() => "Server startup");

/*
server.close();
logger(() => "Server shutdown");
*/
