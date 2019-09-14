window.onload = () =>{
    const host = "18.182.118.31";
    const logger = fun => console.log(`[${new Date()}] ${fun.call(null)}`);

    const obj = {hello: "world"};
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    document.getElementById("btnhttp").addEventListener("click", e =>{
        fetch("http://" + host + ":80", {method, headers, body})
            .then(response => {
                JSON.stringify({ operator: "+", a: 8, b: 3 });
            });
    });


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