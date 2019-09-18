const serverStart = (port) => {

    var data = null;
    const http = require("http");
    const logger = fun => console.log(`[${new Date()}] ${fun.call(null)}`);

    const server = http.createServer((request, response) => {
        request.setEncoding("utf-8");

        request.on("data", chunk => {
            logger(() => `received data[${chunk}]`);
            chunk.
            data = JSON.parse(chunk);

        });
        request.on("end", () => {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            response.setHeader('Access-Control-Allow-Credentials', true);
            response.end(JSON.stringify(data));
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

};
exports.serverStart = serverStart;