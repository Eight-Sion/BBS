const serverStart = (port) => {
    const server = require("ws").Server;
    const s = new server({ port: port});

    s.on("connection", ws => {
        ws.on("message", message => {
            console.log("Received: " + message + ", Port: " + port);

            if(message === "hello"){
                ws.send("hello from server Port: " + port);
            }
        });
    });
};
exports.serverStart = serverStart;