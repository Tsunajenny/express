const jwt = require("jsonwebtoken");

const key = "ndjkdsnjdnfjnf";

function signToken(payload, cb){
    jwt.sign(payload, key, cb);
}

module.exports = {
    signToken : signToken
}