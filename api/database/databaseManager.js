const create = (table, jsonObject) => {

        switch (table) {
            case "users": (async () => await require('./postgres/create.js')).(); break;
            case "accounts": break;
            case "posts": break;
            case "comments": break;
        }

}
exports.create = create;