"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var organization_1 = __importDefault(require("../models/organization"));
var project_1 = __importDefault(require("../models/project"));
var user_1 = __importDefault(require("../models/user"));
var ticket_1 = __importDefault(require("../models/ticket"));
var takayaHoldingsId = '5f795460d484e84a716e6dda';
var systemAdminId = '5f30dc2beca63d3ceae1599b';
// Demo project ids.
var demoProjects = [
    '5fcea8aa10c96363ea4a89db',
    '5fe2e4b67f3e5b274e20417f',
];
var generateDemoData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, orgId, demoMembers, orgData, prevAndNewMemberIdsMap_1, _i, demoMembers_1, member, removedId, restMemberData, formattedName, formattedOrgName, newUser, savedUser, _loop_1, _b, demoProjects_1, projectId, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 11, , 12]);
                _a = req.body, userId = _a.userId, orgId = _a.orgId;
                return [4 /*yield*/, user_1.default.find({ orgId: takayaHoldingsId }).lean()];
            case 1:
                demoMembers = _c.sent();
                return [4 /*yield*/, organization_1.default.findById(orgId).lean()];
            case 2:
                orgData = _c.sent();
                prevAndNewMemberIdsMap_1 = [];
                _i = 0, demoMembers_1 = demoMembers;
                _c.label = 3;
            case 3:
                if (!(_i < demoMembers_1.length)) return [3 /*break*/, 6];
                member = demoMembers_1[_i];
                removedId = member._id, restMemberData = __rest(member, ["_id"]);
                formattedName = restMemberData.name
                    .toLowerCase()
                    .split(' ')
                    .join('');
                formattedOrgName = orgData && orgData.name.toLowerCase().split(' ').join('');
                newUser = new user_1.default(__assign(__assign({}, restMemberData), { email: formattedName + "@" + formattedOrgName + ".com", orgId: orgId }));
                return [4 /*yield*/, newUser.save()];
            case 4:
                savedUser = _c.sent();
                prevAndNewMemberIdsMap_1 = __spreadArrays([
                    {
                        prevId: String(removedId),
                        newId: String(savedUser._id),
                    }
                ], prevAndNewMemberIdsMap_1);
                _c.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                _loop_1 = function (projectId) {
                    var project, updatedMembers, _loop_2, _i, _a, memberId, projectValues, newProject, savedProject, demoTickets, prevAndNewTicketIdsMap, _loop_3, _b, demoTickets_1, ticket, newTickets, _loop_4, _c, newTickets_1, ticketData, projectColumns, _d, _e, columnKey, newTaskids, _loop_5, _f, _g, ticketId, projectHistories;
                    return __generator(this, function (_h) {
                        switch (_h.label) {
                            case 0: return [4 /*yield*/, project_1.default.findById(projectId).lean()];
                            case 1:
                                project = _h.sent();
                                updatedMembers = [];
                                _loop_2 = function (memberId) {
                                    var newMember = prevAndNewMemberIdsMap_1.find(function (data) { return data.prevId === memberId; });
                                    updatedMembers.push(String(newMember.newId));
                                };
                                // Prepare updated members field.
                                for (_i = 0, _a = project.members; _i < _a.length; _i++) {
                                    memberId = _a[_i];
                                    _loop_2(memberId);
                                }
                                projectValues = {
                                    key: project.key,
                                    name: project.name,
                                    description: project.description,
                                    category: project.category,
                                    projectIconUrl: project.projectIconUrl,
                                    columns: project.columns,
                                    columnOrder: project.columnOrder,
                                    seq: project.seq,
                                    history: project.history,
                                    orgId: orgId,
                                    members: __spreadArrays(updatedMembers, [userId]),
                                };
                                newProject = new project_1.default(projectValues);
                                return [4 /*yield*/, newProject.save()];
                            case 2:
                                savedProject = _h.sent();
                                return [4 /*yield*/, ticket_1.default.find({ projectId: projectId }).lean()];
                            case 3:
                                demoTickets = _h.sent();
                                prevAndNewTicketIdsMap = [];
                                _loop_3 = function (ticket) {
                                    var removedId, restTicketData, comments, prevReporter, newReporter, prevAssignee, newAssignee, newTicket, savedTicket;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                removedId = ticket._id, restTicketData = __rest(ticket, ["_id"]);
                                                comments = restTicketData.comments;
                                                // Update comments with new ticket ids.
                                                comments.forEach(function (comment, index) {
                                                    var newMember = prevAndNewMemberIdsMap_1.find(function (data) { return data.prevId == comment.user; });
                                                    comments[index].user = newMember.newId;
                                                });
                                                prevReporter = prevAndNewMemberIdsMap_1.find(function (data) { return data.prevId === restTicketData.reporterId; });
                                                newReporter = prevReporter ? prevReporter.newId : '';
                                                prevAssignee = prevAndNewMemberIdsMap_1.find(function (data) { return data.prevId === restTicketData.assigneeId; });
                                                newAssignee = prevAssignee ? prevAssignee.newId : '';
                                                newTicket = new ticket_1.default(__assign(__assign({}, restTicketData), { reporterId: newReporter, assigneeId: restTicketData.assigneeId == systemAdminId ? userId : newAssignee, comments: comments, projectId: savedProject._id }));
                                                return [4 /*yield*/, newTicket.save()];
                                            case 1:
                                                savedTicket = _a.sent();
                                                prevAndNewTicketIdsMap = __spreadArrays([
                                                    {
                                                        prevId: removedId,
                                                        newId: savedTicket._id,
                                                    }
                                                ], prevAndNewTicketIdsMap);
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                _b = 0, demoTickets_1 = demoTickets;
                                _h.label = 4;
                            case 4:
                                if (!(_b < demoTickets_1.length)) return [3 /*break*/, 7];
                                ticket = demoTickets_1[_b];
                                return [5 /*yield**/, _loop_3(ticket)];
                            case 5:
                                _h.sent();
                                _h.label = 6;
                            case 6:
                                _b++;
                                return [3 /*break*/, 4];
                            case 7: return [4 /*yield*/, ticket_1.default.find({
                                    projectId: savedProject._id,
                                }).lean()];
                            case 8:
                                newTickets = _h.sent();
                                _loop_4 = function (ticketData) {
                                    var newLinkedEpic;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(ticketData.linkedEpic && ticketData.issueType !== 'Epic')) return [3 /*break*/, 2];
                                                newLinkedEpic = prevAndNewTicketIdsMap.find(function (data) { return data.prevId == String(ticketData.linkedEpic); });
                                                if (!newLinkedEpic) return [3 /*break*/, 2];
                                                return [4 /*yield*/, ticket_1.default.findOneAndUpdate({ _id: ticketData._id }, { $set: { linkedEpic: newLinkedEpic.newId } }, { runValidators: true })];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                };
                                _c = 0, newTickets_1 = newTickets;
                                _h.label = 9;
                            case 9:
                                if (!(_c < newTickets_1.length)) return [3 /*break*/, 12];
                                ticketData = newTickets_1[_c];
                                return [5 /*yield**/, _loop_4(ticketData)];
                            case 10:
                                _h.sent();
                                _h.label = 11;
                            case 11:
                                _c++;
                                return [3 /*break*/, 9];
                            case 12:
                                projectColumns = savedProject.columns;
                                for (_d = 0, _e = Object.keys(projectColumns); _d < _e.length; _d++) {
                                    columnKey = _e[_d];
                                    newTaskids = [];
                                    _loop_5 = function (ticketId) {
                                        var newTicket = prevAndNewTicketIdsMap.find(function (data) { return data.prevId == ticketId; });
                                        // Update taskIds with a new ticket id.
                                        newTaskids.push(newTicket.newId);
                                    };
                                    for (_f = 0, _g = projectColumns[columnKey].taskIds; _f < _g.length; _f++) {
                                        ticketId = _g[_f];
                                        _loop_5(ticketId);
                                    }
                                    projectColumns[columnKey].taskIds = newTaskids;
                                }
                                projectHistories = savedProject.history;
                                projectHistories.forEach(function (history, index) {
                                    var newTicket = prevAndNewTicketIdsMap.find(function (data) { return data.prevId == history.ticket.id; });
                                    if (newTicket) {
                                        projectHistories[index].ticket.id = newTicket.newId;
                                    }
                                    var newMember = prevAndNewMemberIdsMap_1.find(function (data) { return data.prevId == projectHistories[index].editor; });
                                    if (newMember) {
                                        projectHistories[index].editor = newMember.newId;
                                    }
                                });
                                // Update the project with the updated columns.
                                return [4 /*yield*/, project_1.default.findOneAndUpdate({ _id: savedProject._id }, { $set: { columns: projectColumns, history: projectHistories } }, { runValidators: true })];
                            case 13:
                                // Update the project with the updated columns.
                                _h.sent();
                                return [2 /*return*/];
                        }
                    });
                };
                _b = 0, demoProjects_1 = demoProjects;
                _c.label = 7;
            case 7:
                if (!(_b < demoProjects_1.length)) return [3 /*break*/, 10];
                projectId = demoProjects_1[_b];
                return [5 /*yield**/, _loop_1(projectId)];
            case 8:
                _c.sent();
                _c.label = 9;
            case 9:
                _b++;
                return [3 /*break*/, 7];
            case 10:
                res.json('Demo data has been generated.');
                return [3 /*break*/, 12];
            case 11:
                err_1 = _c.sent();
                console.log(err_1);
                res.status(400).send(err_1);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
var updateDemoDataDates = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, demoProjects_2, projectId, demoTickets, today, currentYear, currentMonth, monthIndex, _a, demoTickets_2, ticket, createdAt, updatedAt, completedAt, comments, restTicketData, provCreatedAt, provUpdatedAt, provCompletedAt, updateDataSet, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                _i = 0, demoProjects_2 = demoProjects;
                _b.label = 1;
            case 1:
                if (!(_i < demoProjects_2.length)) return [3 /*break*/, 7];
                projectId = demoProjects_2[_i];
                return [4 /*yield*/, ticket_1.default.find({ projectId: projectId }).lean()];
            case 2:
                demoTickets = _b.sent();
                today = new Date();
                currentYear = today.getFullYear();
                currentMonth = today.getMonth();
                monthIndex = currentMonth;
                _a = 0, demoTickets_2 = demoTickets;
                _b.label = 3;
            case 3:
                if (!(_a < demoTickets_2.length)) return [3 /*break*/, 6];
                ticket = demoTickets_2[_a];
                createdAt = ticket.createdAt, updatedAt = ticket.updatedAt, completedAt = ticket.completedAt, comments = ticket.comments, restTicketData = __rest(ticket, ["createdAt", "updatedAt", "completedAt", "comments"]);
                provCreatedAt = new Date(createdAt);
                provUpdatedAt = new Date(updatedAt);
                provCreatedAt.setFullYear(currentYear);
                provUpdatedAt.setFullYear(currentYear);
                if (monthIndex < currentMonth - 5) {
                    monthIndex = currentMonth;
                }
                provCreatedAt.setMonth(monthIndex);
                provUpdatedAt.setMonth(monthIndex);
                provCompletedAt = undefined;
                if (completedAt) {
                    provCompletedAt = new Date(completedAt);
                    provCompletedAt.setFullYear(currentYear);
                    provCompletedAt.setMonth(monthIndex);
                }
                updateDataSet = {
                    createdAt: provCreatedAt,
                    updatedAt: provUpdatedAt,
                };
                // Update with the new dates
                return [4 /*yield*/, ticket_1.default.findOneAndUpdate({ _id: restTicketData._id }, { $set: __assign(__assign({}, updateDataSet), { completedAt: provCompletedAt }) }, { runValidators: true, timestamps: false })];
            case 4:
                // Update with the new dates
                _b.sent();
                monthIndex--;
                _b.label = 5;
            case 5:
                _a++;
                return [3 /*break*/, 3];
            case 6:
                _i++;
                return [3 /*break*/, 1];
            case 7:
                res.json('Demo data has been updated.');
                return [3 /*break*/, 9];
            case 8:
                err_2 = _b.sent();
                console.log(err_2);
                res.status(400).send(err_2);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.default = { generateDemoData: generateDemoData, updateDemoDataDates: updateDemoDataDates };
