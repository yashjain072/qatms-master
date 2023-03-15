"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
// Check if the client request has token in header without falcification
var verify = function (req, res, next) {
    // Get request header.
    var authHeader = req.header('Authorization');
    // Get token from header after Bearer.
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.status(401).send('Access Denied');
    jsonwebtoken_1.default.verify(token, config_1.default.server.token.accessSecret, function (err, user) {
        if (err)
            return res.status(403).send('Invalid Token');
        res.locals.user = user;
        next();
    });
};
exports.default = verify;
