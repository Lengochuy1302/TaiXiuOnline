var config = require('../config');
module.exports = function(req, res, next) {
    const authorization = req.headers.authorization;
    const { token } = req.cookies || {}
    if (authorization &&
        authorization.startsWith('Bearer ') || token) {
        const token = authorization ? authorization.slice('Bearer '.length) : token;
        var jwt = require('jsonwebtoken');
        var bcrypt = require('bcrypt-nodejs');

        var cert = config.secret;
        jwt.verify(token, cert, function(err, decoded) {
            if (decoded && decoded.rights == 9) {
                req.userAuth = decoded;
                next();
            } else {
                if (err && err.name == 'TokenExpiredError') {
                    console.log("============================TOKEN EXPIRE HANDLE");
                    var error = new Error("isAuthenticated.TokenExpiredError");
                    return res.status(403).json(error);
                } else {
                    console.log(err);
                    var error = new Error("isAuthenticated.tokenInvalid");
                    return res.status(403).json(error);
                }
            }
        });
    } else {
        var error = new Error("isAuthenticated.authorizationNotProvided");
        return res.status(403).json(error);
    }
};