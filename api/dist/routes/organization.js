"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var organization_1 = __importDefault(require("../controllers/organization"));
var auth_1 = __importDefault(require("../middleware/auth"));
var router = express_1.default.Router();
// @route  GET organizations/:id
// @desc   Get organization by id.
// @access Private
router.get('/:id', auth_1.default, organization_1.default.getOrganizationById);
// @route  POST organizations/create
// @desc   Create a new organization.
// @access Private
router.post('/create', auth_1.default, organization_1.default.createOrganization);
module.exports = router;
