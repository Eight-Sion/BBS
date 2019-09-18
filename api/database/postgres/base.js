const initialize = (host, user, database, password) => {
    var {Client} = require("pg");
    var client = new Client({
        user: user,
        host: host,
        database: database,
        password: password,
        port: "5432"
    });

    client.connect();
    console.log("Connected to " + "PostgreSQL");
    return client;
};

const create = (query, host, user, database, password) => {

    var client = initialize(host, user, database, password);
    client.query(query)
        .then(res => console.log(res.rows[0]))
        .catch(err => console.error(err.stack));
};
exports.create = create;





