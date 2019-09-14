const users = (name) => {
    return {
        text: "INSERT INTO users(name) VALUES($1)",
        values: [name]
    }
};
exports.users = users;

const accounts = (user_id, password, email) =>{
    return {
        text: "INSERT INTO acconts(password, email) VALUES($1, $2, $3)",
        values: [user_id, password, email]
    }
};
exports.accounts = accounts;

const post = (user_id, title, message, createdate, updatedate) =>{
    return {
        text: "INSERT INTO acconts(user_id, title, message, createdate, updatedate) VALUES($1, $2, $3, $4, $5)",
        values: [user_id, title, message, createdate, updatedate]
    }
};
exports.post = post;

const comments = (user_id, post_id, comment, createdate) =>{
    return {
        text: "INSERT INTO acconts(user_id, post_id, comment, createdate) VALUES($1, $2, $3, $4)",
        values: [user_id, post_id, comment, createdate]
    }
};
exports.comments = comments;





