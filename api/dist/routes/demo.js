"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("../middleware/auth"));
var demo_1 = __importDefault(require("../controllers/demo"));
var router = express_1.default.Router();
// @route  POST demo/generate
// @desc   Generate demo all the demo data.
// @access Private
router.post('/generate', auth_1.default, demo_1.default.generateDemoData);
// @route  PUT demo/update_dates
// @desc   Update the demo data dates on tickets, etc.
// @access Private
router.put('/update_dates', demo_1.default.updateDemoDataDates);
module.exports = router;
