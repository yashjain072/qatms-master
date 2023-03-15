"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidation = exports.loginValidation = exports.registerValidation = void 0;
//VAIDATION
var joi_1 = __importDefault(require("@hapi/joi"));
//Register Validation
var registerValidation = function (data) {
    var schema = joi_1.default.object({
        name: joi_1.default.string().min(5).required(),
        email: joi_1.default.string().min(6).required().email(),
        password: joi_1.default.string().min(6).required(),
    });
    return schema.validate(data);
};
exports.registerValidation = registerValidation;
//Login Validation
var loginValidation = function (data) {
    var schema = joi_1.default.object({
        email: joi_1.default.string().min(6).required().email(),
        password: joi_1.default.string().min(6).required(),
    });
    return schema.validate(data);
};
exports.loginValidation = loginValidation;
//Register Validation
var updateValidation = function (data) {
    var schema = joi_1.default.object({
        name: joi_1.default.string().min(5).required(),
        email: joi_1.default.string().min(6).required().email(),
        position: joi_1.default.string().min(1).required(),
        pictureUrl: joi_1.default.string().min(1).required().uri(),
    });
    return schema.validate(data);
};
exports.updateValidation = updateValidation;
