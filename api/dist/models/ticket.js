"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var ticketSchema = new mongoose_1.Schema({
    projectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        trim: true,
    },
    key: {
        type: Number,
        required: true,
        default: 0,
    },
    issueType: {
        type: String,
        required: true,
        trim: true,
    },
    issuePriority: {
        type: String,
        required: true,
        trim: true,
    },
    summary: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    assigneeId: {
        type: String,
        trim: true,
    },
    reporterId: {
        type: String,
        required: true,
        trim: true,
    },
    comments: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    linkedEpic: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    issueColor: {
        type: String,
    },
    dateRange: {
        type: Object,
    },
    dueDate: {
        type: Date,
    },
    columnId: {
        type: String,
    },
    completedAt: {
        type: Date,
    },
}, {
    timestamps: true,
    minimize: false,
});
exports.default = mongoose_1.default.model('Ticket', ticketSchema);
