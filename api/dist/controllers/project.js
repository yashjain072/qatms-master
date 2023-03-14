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
var project_1 = __importDefault(require("../models/project"));
// Get project by organization id.
var getProjectByOrgId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var project, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, project_1.default.find({ orgId: req.params.org_id })];
            case 1:
                project = _a.sent();
                res.json(project);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).json('Error: ' + err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Create a project.
var createProject = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, key, name_1, orgId, description, category, projectIconUrl, uid, newProject, savedProject, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, key = _a.key, name_1 = _a.name, orgId = _a.orgId, description = _a.description, category = _a.category, projectIconUrl = _a.projectIconUrl;
                uid = res.locals.user._id;
                newProject = new project_1.default({
                    key: key,
                    name: name_1,
                    orgId: orgId,
                    description: description,
                    category: category,
                    projectIconUrl: projectIconUrl,
                    members: [String(uid)],
                });
                return [4 /*yield*/, newProject.save()];
            case 1:
                savedProject = _b.sent();
                res.json(savedProject);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                res.status(400).send(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update a project.
var updateProject = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var projectId, updatedValues, updatedProject, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                projectId = req.params.id;
                updatedValues = req.body;
                return [4 /*yield*/, project_1.default.findOneAndUpdate({ _id: projectId }, { $set: updatedValues }, { new: true, runValidators: true })];
            case 1:
                updatedProject = _a.sent();
                res.json(updatedProject);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400).send(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Delete a project.
var deleteProject = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var project, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, project_1.default.findByIdAndDelete(req.params.id)];
            case 1:
                project = _a.sent();
                res.json(project);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(400).send(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update ticket order within the column.
var updateProjectHistory = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, project, _a, ticket, type, field, before, after, newHistory, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                uid = res.locals.user._id;
                return [4 /*yield*/, project_1.default.findById(req.params.id)];
            case 1:
                project = _b.sent();
                _a = req.body, ticket = _a.ticket, type = _a.type, field = _a.field, before = _a.before, after = _a.after;
                newHistory = {
                    ticket: ticket,
                    type: type,
                    editor: uid,
                    field: field,
                    before: before,
                    after: after,
                    date: Date.now(),
                };
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                // If the history length is equal or greater than 30,
                // remove the last history item.
                if (project.history.length >= 30) {
                    project.history.pop();
                }
                project.history.unshift(newHistory);
                return [4 /*yield*/, project.save()];
            case 2:
                _b.sent();
                res.json(project.history);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _b.sent();
                res.status(400).send(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Update column order of the project board.
var updateProjectColumnOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newColumnOrder, project, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newColumnOrder = req.body.newColumnOrder;
                return [4 /*yield*/, project_1.default.findById(req.params.id)];
            case 1:
                project = _a.sent();
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                project.columnOrder = newColumnOrder;
                project.save();
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(400).json('Error: ' + err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update ticket order within the column or between two columns.
var updateProjectIssuesOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newColumn, project, newStart, newFinish, err_7;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                newColumn = req.body.newColumn;
                return [4 /*yield*/, project_1.default.findById(req.params.id)];
            case 1:
                project = _c.sent();
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                if (newColumn.newStart !== undefined && newColumn.newFinish !== undefined) {
                    newStart = newColumn.newStart, newFinish = newColumn.newFinish;
                    project.columns = __assign(__assign({}, project.columns), (_a = {}, _a[newStart.id] = newStart, _a[newFinish.id] = newFinish, _a));
                }
                else {
                    project.columns = __assign(__assign({}, project.columns), (_b = {}, _b[newColumn.id] = newColumn, _b));
                }
                return [4 /*yield*/, project.save()];
            case 2:
                _c.sent();
                res.json('Update issues order');
                return [3 /*break*/, 4];
            case 3:
                err_7 = _c.sent();
                res.status(400).json('Error: ' + err_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
//Update tickets order when issue status of an existng ticket is changed.
var updateProjectIssueStatus = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ticketId_1, columnMove, beforeColumn, afterColumn, project, err_8;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, ticketId_1 = _a.ticketId, columnMove = _a.columnMove;
                beforeColumn = columnMove.beforeColumn, afterColumn = columnMove.afterColumn;
                return [4 /*yield*/, project_1.default.findById(req.params.id)];
            case 1:
                project = _c.sent();
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                if (beforeColumn === afterColumn) {
                    res.json('Update Ticket');
                    return [2 /*return*/];
                }
                project.columns = __assign(__assign({}, project.columns), (_b = {}, _b[beforeColumn] = __assign(__assign({}, project.columns[beforeColumn]), { taskIds: project.columns[beforeColumn].taskIds.filter(function (taskId) { return taskId !== ticketId_1; }) }), _b[afterColumn] = __assign(__assign({}, project.columns[afterColumn]), { taskIds: __spreadArrays(project.columns[afterColumn].taskIds, [ticketId_1]) }), _b));
                return [4 /*yield*/, project.save()];
            case 2:
                _c.sent();
                res.json('Update taskids');
                return [3 /*break*/, 4];
            case 3:
                err_8 = _c.sent();
                res.status(400).send(err_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Create a new ticket and assign it to a proper location.
var updateProjectTaskIds = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ticketId, columnId, project, targetColumn, err_9;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, ticketId = _a.ticketId, columnId = _a.columnId;
                return [4 /*yield*/, project_1.default.findById(req.params.id)];
            case 1:
                project = _c.sent();
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                targetColumn = columnId ? columnId : project.columnOrder[0];
                project.columns = __assign(__assign({}, project.columns), (_b = {}, _b[targetColumn] = __assign(__assign({}, project.columns[targetColumn]), { taskIds: __spreadArrays(project.columns[targetColumn].taskIds, [ticketId]) }), _b));
                return [4 /*yield*/, project.save()];
            case 2:
                _c.sent();
                res.json('Create Ticket !');
                return [3 /*break*/, 4];
            case 3:
                err_9 = _c.sent();
                res.status(400).send(err_9);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Update the column taskIds array.
var deleteProjectTaskIds = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, columnId, ticketId_2, project, err_10;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, columnId = _a.columnId, ticketId_2 = _a.ticketId;
                return [4 /*yield*/, project_1.default.findById(req.params.id)];
            case 1:
                project = _c.sent();
                if (!project)
                    return [2 /*return*/, res.status(400).send('Project not found.')];
                project.columns = __assign(__assign({}, project.columns), (_b = {}, _b[columnId] = __assign(__assign({}, project.columns[columnId]), { taskIds: project.columns[columnId].taskIds.filter(function (taskId) { return taskId != ticketId_2; }) }), _b));
                return [4 /*yield*/, project.save()];
            case 2:
                _c.sent();
                res.json('Delete Ticket !');
                return [3 /*break*/, 4];
            case 3:
                err_10 = _c.sent();
                res.status(400).send(err_10);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getProjectByOrgId: getProjectByOrgId,
    createProject: createProject,
    updateProject: updateProject,
    deleteProject: deleteProject,
    updateProjectHistory: updateProjectHistory,
    updateProjectColumnOrder: updateProjectColumnOrder,
    updateProjectIssuesOrder: updateProjectIssuesOrder,
    updateProjectIssueStatus: updateProjectIssueStatus,
    updateProjectTaskIds: updateProjectTaskIds,
    deleteProjectTaskIds: deleteProjectTaskIds,
};
