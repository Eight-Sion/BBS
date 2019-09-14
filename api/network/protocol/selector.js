const serverStart = (protocol, port) => {
    const module = null;
    (async () => {
        switch (protocol) {
            default:
            case "http":
                const httpModule = await require('./http/server.js');
                httpModule.serverStart(port);
                break;

            case "https": break;

            case "websocket":
                const websocketModule = await require('./websocket/server.js');
                websocketModule.serverStart(port);
                break;
        }
    })();
};
exports.serverStart = serverStart;