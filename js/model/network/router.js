const host = "localhost";
const logger = fun => console.log(`[${new Date()}] ${fun.call(null)}`);
const obj = {hello: "world"};
const method = {
    post: "POST",
    get: "GET",
    put: "PUT",
    delete: "DELETE"
}
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

window.onload = () =>{
    console.log("router.js window.onload!");
    document.getElementById("btnHttpPost").addEventListener("click", e =>　{
        console.log("post Execute!");
        connectByCRUD(method.post);});
    document.getElementById("btnHttpGet").addEventListener("click", e =>　{
        console.log("get Execute!");
        connectByCRUD(method.get);});
    document.getElementById("btnHttpPut").addEventListener("click", e =>　{
        console.log("put Execute!");
        connectByCRUD(method.put);});
    document.getElementById("btnHttpDelete").addEventListener("click", e =>　{
        console.log("delete Execute!");
        connectByCRUD(method.delete);});

    const sock1 = new WebSocket("ws://" + host + ":5001");
    const sock2 = new WebSocket("ws://" + host + ":5002");

    sock1.addEventListener("open", e => {
        console.log("接続が開かれたときに呼び出されるイベント");
    });

    sock1.addEventListener("message", e => {
        console.log("サーバーからメッセージを受信したときに呼び出されるイベント");
    });

    sock1.addEventListener("close", e => {
        console.log("接続が閉じられたときに呼び出されるイベント");
    });

    sock1.addEventListener("error", e => {
        console.log("エラーが発生したときに呼び出されるイベント");
    });
    sock2.addEventListener("open", e => {
        console.log("接続が開かれたときに呼び出されるイベント");
    });

    sock2.addEventListener("message", e => {
        console.log("サーバーからメッセージを受信したときに呼び出されるイベント");
    });

    sock2.addEventListener("close", e => {
        console.log("接続が閉じられたときに呼び出されるイベント");
    });

    sock2.addEventListener("error", e => {
        console.log("エラーが発生したときに呼び出されるイベント");
    });

    document.getElementById("btn1").addEventListener("click", e => {
        sock1.send("hello");
    });
    document.getElementById("btn2").addEventListener("click", e => {
        sock2.send("hello")
    });

}

const connectByCRUD = (type) => {
    return () =>{
        var body = JSON.stringify(obj);
        switch (type) {
            case method.get:
            case method.delete:
                fetch("http://" + host + ":8080", {type, headers})
                    .then(response => {
                        JSON.stringify({ operator: "+", a: 8, b: 3 });
                    });
                break;

            default:
                fetch("http://" + host + ":8080", {type, headers, body})
                    .then(response => {
                        JSON.stringify({ operator: "+", a: 8, b: 3 });
                    });
        }
    }
}