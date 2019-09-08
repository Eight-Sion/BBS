let http = require('http');
let request = require('request');
let response = require('response');
let url = 'https://api.atnd.org/events/?keyword_or=javascript&format=json'
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