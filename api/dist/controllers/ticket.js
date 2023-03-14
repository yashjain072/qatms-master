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
var ticket_1 = __importDefault(require("../models/ticket"));
var project_1 = __importDefault(require("../models/project"));
// Get tickets overview collection of the project.
var getTicketsByProjectId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var tickets, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ticket_1.default.find({ projectId: req.params.project_id })];
            case 1:
                tickets = _a.sent();
                res.json(tickets);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).json('Error: ' + err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//Create a new ticket of the project.
var createTicket = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, projectId, project, updatedSeq, newTicket, savedNewTicket, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                formData = req.body;
                projectId = formData.projectId;
                return [4 /*yield*/, project_1.default.findById(projectId)];
            case 1:
                project = _a.sent();
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                updatedSeq = ++project.seq;
                // Update a sequence value of the project.
                project.seq = updatedSeq;
                // Assign a key of the ticket.
                formData.key = updatedSeq;
                newTicket = new ticket_1.default(formData);
                return [4 /*yield*/, newTicket.save()];
            case 2:
                savedNewTicket = _a.sent();
                return [4 /*yield*/, project.save()];
            case 3:
                _a.sent();
                res.json(savedNewTicket);
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                res.status(400).send(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Delete a ticket of the id.
var deleteTicket = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ticket, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ticket_1.default.findByIdAndDelete(req.params.ticketId)];
            case 1:
                ticket = _a.sent();
                res.json(ticket);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400).send(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update an existing ticket of the project.
var updateTicket = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, _a, field, value, updatedTicket, err_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                ticketId = req.params.id;
                _a = req.body, field = _a.field, value = _a.value;
                // Check the requested body's format is valid.
                if (!field) {
                    res.status(400).send('Invalid submission');
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ticket_1.default.findOneAndUpdate({ _id: ticketId }, { $set: (_b = {}, _b[field] = value, _b) }, { new: true, runValidators: true })];
            case 2:
                updatedTicket = _c.sent();
                res.json(updatedTicket);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _c.sent();
                res.status(400).send(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
//Comment on a ticket.
var addTicketComment = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, ticket, newComment, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                uid = res.locals.user._id;
                return [4 /*yield*/, ticket_1.default.findById(req.params.id)];
            case 1:
                ticket = _a.sent();
                newComment = {
                    user: uid,
                    text: req.body.text,
                };
                if (!ticket)
                    return [2 /*return*/, res.status(400).send('Ticket not found.')];
                ticket.comments.unshift(newComment);
                return [4 /*yield*/, ticket.save()];
            case 2:
                _a.sent();
                res.json(ticket.comments);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res.status(400).send(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Delete comment.
var deleteTicketComment = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ticket, uid, comment, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, ticket_1.default.findById(req.params.ticket_id)];
            case 1:
                ticket = _a.sent();
                uid = res.locals.user._id;
                if (!ticket)
                    return [2 /*return*/, res.status(400).send('Ticket not found.')];
                comment = ticket.comments.find(function (comment) { return comment.id === req.params.comment_id; });
                // Make sure comment exists
                if (!comment) {
                    return [2 /*return*/, res.status(404).json({ msg: 'Comment does not exist' })];
                }
                // Check user
                if (comment.user.toString() !== uid) {
                    return [2 /*return*/, res.status(401).json({ msg: 'User not authorized' })];
                }
                ticket.comments = ticket.comments.filter(function (_a) {
                    var id = _a.id;
                    return id !== req.params.comment_id;
                });
                return [4 /*yield*/, ticket.save()];
            case 2:
                _a.sent();
                res.json(ticket.comments);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                res.status(400).send(err_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getTicketsByProjectId: getTicketsByProjectId,
    createTicket: createTicket,
    deleteTicket: deleteTicket,
    updateTicket: updateTicket,
    addTicketComment: addTicketComment,
    deleteTicketComment: deleteTicketComment,
};
