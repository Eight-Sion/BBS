(async () => { await require('./network/protocol/selector.js')
    .serverStart("http", "80");})();
(async () => { await require('./network/protocol/selector.js')
    .serverStart("websocket", "5001");})();
(async () => { await require('./network/protocol/selector.js')
    .serverStart("websocket", "5002");})();