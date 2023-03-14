"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../models/user"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var config_1 = __importDefault(require("../config/config"));
var validation_1 = require("../utils/validation");
var constants_1 = require("../constants/constants");
var authToken_1 = require("../utils/authToken");
// Register user
var registerUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error, _a, name_1, email, password, emailExist, salt, hashedPassword, newUser, savedUser, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                error = validation_1.registerValidation(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 1:
                emailExist = _b.sent();
                if (emailExist)
                    return [2 /*return*/, res.status(400).send('Email already exists')];
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 2:
                salt = _b.sent();
                return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
            case 3:
                hashedPassword = _b.sent();
                newUser = new user_1.default({
                    name: name_1,
                    email: email,
                    password: hashedPassword,
                    pictureUrl: constants_1.defaultUserProfilePic,
                });
                return [4 /*yield*/, newUser.save()];
            case 4:
                savedUser = _b.sent();
                token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, config_1.default.server.token.accessSecret, { expiresIn: config_1.default.server.token.expireTime });
                res.json({ token: token });
                return [3 /*break*/, 6];
            case 5:
                err_1 = _b.sent();
                res.status(400).send(err_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
// Login user
var loginUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error, _a, email, password, user, validPass, userId, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                error = validation_1.loginValidation(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!user)
                    return [2 /*return*/, res.status(400).send('Email or password is wrong')];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 3:
                validPass = _b.sent();
                if (!validPass)
                    return [2 /*return*/, res.status(400).send('Email or password is wrong')];
                userId = { _id: user._id };
                token = authToken_1.generateAccessToken(userId);
                res.json({ token: token });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                res.status(500).send('Server error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Login for demo without validating password.
var demoLoginUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, userId, token, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.body.email;
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, res.status(400).send('Email or password is wrong')];
                userId = { _id: user._id };
                token = authToken_1.generateAccessToken(userId);
                res.json({ token: token });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).send('Server error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Authenticate request from client and return user data when the token is varified.
var authenticateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, user, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uid = res.locals.user._id;
                return [4 /*yield*/, user_1.default.findById(uid).select('-password')];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, res.status(400).send('User not found.')];
                res.json(user);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(400).json('Error: ' + err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update user.
var updateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, formData, updatedUser, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.params.id;
                formData = req.body;
                return [4 /*yield*/, user_1.default.findOneAndUpdate({ _id: userId }, { $set: formData }, { new: true, runValidators: true }).select('-password')];
            case 1:
                updatedUser = _a.sent();
                res.json(updatedUser);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(400).send(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//Update user profile.
var updateUserProile = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, formData, updatedValues, error, updatedUser, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.params.id;
                formData = req.body;
                updatedValues = {
                    name: formData.name,
                    email: formData.email,
                    position: formData.position,
                    pictureUrl: formData.pictureUrl,
                };
                error = validation_1.updateValidation(updatedValues).error;
                if (error)
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                return [4 /*yield*/, user_1.default.findOneAndUpdate({ _id: userId }, { $set: updatedValues }, { new: true, runValidators: true }).select('-password')];
            case 1:
                updatedUser = _a.sent();
                res.json(updatedUser);
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(400).send(err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update user role.
var updateUserRole = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, newRole, updatedUser, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.params.id;
                newRole = req.body.role;
                // If a new role is not one of the valid roles, return error.
                if (!Object.values(constants_1.roleType).includes(newRole)) {
                    return [2 /*return*/, res.status(400).send('Non valid role')];
                }
                return [4 /*yield*/, user_1.default.findOneAndUpdate({ _id: userId }, { $set: { role: newRole } }, { new: true, runValidators: true }).select('-password')];
            case 1:
                updatedUser = _a.sent();
                res.json(updatedUser);
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                res.status(400).send(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Get users in the organization.
var getOrgMembers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var orgId, users, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orgId = req.params.org_id;
                return [4 /*yield*/, user_1.default.find({ orgId: orgId }).select('-password')];
            case 1:
                users = _a.sent();
                res.json(users);
                return [3 /*break*/, 3];
            case 2:
                err_8 = _a.sent();
                res.status(400).send(err_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    registerUser: registerUser,
    loginUser: loginUser,
    demoLoginUser: demoLoginUser,
    authenticateUser: authenticateUser,
    updateUser: updateUser,
    updateUserProile: updateUserProile,
    updateUserRole: updateUserRole,
    getOrgMembers: getOrgMembers,
};
