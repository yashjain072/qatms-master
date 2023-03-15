"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var project_1 = __importDefault(require("../controllers/project"));
var auth_1 = __importDefault(require("../middleware/auth"));
var router = express_1.default.Router();
// @route  GET projects/:id
// @desc   Get project by organization id.
// @access Private
router.get('/:org_id', auth_1.default, project_1.default.getProjectByOrgId);
// @route  POST projects/create
// @desc   Create a new project.
// @access Private
router.post('/create', auth_1.default, project_1.default.createProject);
// @route  POST projects/update/tickets_order/:id
// @desc   Update ticket order within the column
// @access Private
router.post('/update/:id', auth_1.default, project_1.default.updateProject);
// @route  POST projects/:id
// @desc   Delete a project.
// @access Private
router.delete('/:id', auth_1.default, project_1.default.deleteProject);
// @route  POST projects/update/tickets_order/:id
// @desc   Update ticket order within the column
// @access Private
router.post('/update/history/:id', auth_1.default, project_1.default.updateProjectHistory);
// @route  POST projects/update/column_order/:id
// @desc   Update column order of the project board.
// @access Private
router.post('/update/column_order/:id', auth_1.default, project_1.default.updateProjectColumnOrder);
// @route  POST projects/update/tickets_order/:id
// @desc   Update ticket order within the column or between two columns.
// @access Private
router.post('/update/tickets_order/:id', auth_1.default, project_1.default.updateProjectIssuesOrder);
// @route  POST projects/update/tickets_status/:id
// @desc   Update tickets order when issue status of an existng ticket is changed.
// @access Private
router.post('/update/ticket_status/:id', auth_1.default, project_1.default.updateProjectIssueStatus);
// @route  POST projects/update/taskids/:id
// @desc   Create a new ticket and assign it to a proper location.
// @access Private
router.post('/update/taskids/:id', auth_1.default, project_1.default.updateProjectTaskIds);
// @route  POST projects/delete/taskids/:id
// @desc   Update the column taskIds array.
// @access Private
router.post('/delete/taskids/:id', auth_1.default, project_1.default.deleteProjectTaskIds);
module.exports = router;
