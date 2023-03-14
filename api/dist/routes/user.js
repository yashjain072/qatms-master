"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("../controllers/user"));
var auth_1 = __importDefault(require("../middleware/auth"));
var router = express_1.default.Router();
// @route  POST users/register
// @desc   Register user
// @access Public
router.post('/register', user_1.default.registerUser);
// @route  POST users/login
// @desc   Login user
// @access Public
router.post('/login', user_1.default.loginUser);
// @route  POST users/login
// @desc   Login for demo without validating password.
// @access Public
router.post('/demo_login', user_1.default.demoLoginUser);
// @route  GET users/authenticate
// @desc   Authenticate request from client and return user data when the token is varified.
// @access Private
router.get('/authenticate', auth_1.default, user_1.default.authenticateUser);
// @route  POST users/update/:userId
// @desc   Update user.
// @access Private
router.post('/update/:id', auth_1.default, user_1.default.updateUser);
// @route  POST users/update/profile/:userId
// @desc   Update user profile.
// @access Private
router.post('/update/profile/:id', auth_1.default, user_1.default.updateUserProile);
// @route  POST users/update/role/:userId
// @desc   Update user role.
// @access Private
router.post('/update/role/:id', auth_1.default, user_1.default.updateUserRole);
// @route  GET users/org/:org_id
// @desc   Get users in the organization.
// @access Private
router.get('/org/:org_id', auth_1.default, user_1.default.getOrgMembers);
module.exports = router;
