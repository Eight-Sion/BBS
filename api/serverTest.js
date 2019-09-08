const http = require("http");

const host = "localhost";
const port = 8080;

const logger = fun => console.log(`[${new Date()}] ${fun.call(null)}`);

const options = {
    host: host,
    port: port,
    method: "POST",
    path: "/calc",
    headers: {
        "Content-Type": "application/json"
    }
};

const addReq = http.request(options, res => {
    res.setEncoding("utf-8");
    res.on("data",  chunk =>  logger(() => `add result => ${chunk}`));
});

addReq.write(JSON.stringify({ operator: "+", a: 8, b: 3 }));
addReq.end();

const minusReq = http.request(options, res => {
    res.setEncoding("utf-8");
    res.on("data", chunk => logger(() => `minus result => ${chunk}`));
});

minusReq.write(JSON.stringify({ operator: "-", a: 8, b: 5}));
minusReq.end();

const multiplyReq = http.request(options, res => {
    res.setEncoding("utf-8");
    res.on("data",  chunk =>  logger(() => `multiply result => ${chunk}`));
});

multiplyReq.write(JSON.stringify({ operator: "*", a: 8, b: 3}));
multiplyReq.end();

const divideReq = http.request(options, res => {
    res.setEncoding("utf-8");
    res.on("data", chunk => logger(() => `divide result => ${chunk}`));
});

divideReq.write(JSON.stringify({ operator: "/", a: 8, b: 3}));
divideReq.end();

const badReq = http.request(options, res => {
    res.setEncoding("utf-8");
    res.on("data", chunk => logger(() => `bad result => ${chunk}`));
});

badReq.write(JSON.stringify({ operator: "?", a: 8, b: 3}));
badReq.end();