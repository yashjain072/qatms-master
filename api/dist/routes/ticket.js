"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var ticket_1 = __importDefault(require("../controllers/ticket"));
var auth_1 = __importDefault(require("../middleware/auth"));
var router = express_1.default.Router();
// @route  GET tickets/:project_id
// @desc   Get tickets overview collection of the project.
// @access Private
router.get('/:project_id', auth_1.default, ticket_1.default.getTicketsByProjectId);
// @route  POST tickets/create
// @desc   Create a new ticket of the project.
// @access Private
router.post('/create', auth_1.default, ticket_1.default.createTicket);
// @route  DELETE tickets/:ticketId/
// @desc   Delete a ticket of the id
// @access Public
router.delete('/:ticketId', auth_1.default, ticket_1.default.deleteTicket);
// @route  POST tickets/update
// @desc   Update an existing ticket of the project.
// @access Private
router.post('/update/:id', auth_1.default, ticket_1.default.updateTicket);
// @route  POST tickets/comment/:id
// @desc   Comment on a ticket.
// @access Private
router.post('/comment/:id', auth_1.default, ticket_1.default.addTicketComment);
// @route  DELETE tickets/comment/:ticket_id/:comment_id
// @desc   Delete comment
// @access Private
router.delete('/comment/:ticket_id/:comment_id', auth_1.default, ticket_1.default.deleteTicketComment);
module.exports = router;
