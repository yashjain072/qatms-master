"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var MONGO_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
var MONGO_USERNAME = process.env.MONGO_USERNAME || 'host123';
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'host123';
var MONGO_HOST = process.env.MONGO_URL || "cluster0.menvh.mongodb.net/sample?w=majority";
var MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    uri: "mongodb+srv://host123:host123@cluster0.icbb9vo.mongodb.net/?retryWrites=true&w=majority",
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 3000;
var SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || '1h';
var ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'superencryptedsecret';
var REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'coolIssuer';
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        accessSecret: ACCESS_TOKEN_SECRET,
        refreshSecret: REFRESH_TOKEN_SECRET,
    },
};
var config = {
    mongo: MONGO,
    server: SERVER,
};
exports.default = config;
