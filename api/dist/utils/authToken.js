"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
var generateAccessToken = function (userId) {
    return jsonwebtoken_1.default.sign(userId, config_1.default.server.token.accessSecret, {
        expiresIn: config_1.default.server.token.expireTime,
    });
};
exports.generateAccessToken = generateAccessToken;
