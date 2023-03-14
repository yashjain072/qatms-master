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
var projectSchema = new mongoose_1.Schema({
    key: {
        type: String,
        required: true,
        trim: true,
    },
    orgId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    members: {
        type: Array,
        required: true,
        minlength: 1,
    },
    columns: {
        type: Object,
        required: true,
        default: {
            'column-1': {
                id: 'column-1',
                title: 'BUG',
                isDoneColumn: false,
                taskIds: [],
            },
            'column-2': {
                id: 'column-2',
                title: 'IN PROGRESS',
                isDoneColumn: false,
                taskIds: [],
            },
            'column-3': {
                id: 'column-3',
                title: 'IN REVIEW',
                isDoneColumn: false,
                taskIds: [],
            },
            'column-4': {
                id: 'column-4',
                title: 'DONE',
                isDoneColumn: true,
                taskIds: [],
            },
        },
    },
    columnOrder: {
        type: Array,
        required: true,
        default: ['column-1', 'column-2', 'column-3', 'column-4'],
    },
    projectIconUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    history: [
        {
            ticket: {
                id: {
                    type: String,
                    required: true,
                },
                displayValue: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    required: true,
                },
            },
            type: {
                type: String,
                required: true,
            },
            editor: {
                type: String,
                required: true,
            },
            field: {
                type: String,
                required: function () {
                    if (this.field === null)
                        return false;
                    return true;
                },
            },
            before: {
                type: String,
                required: function () {
                    if (this.before === null)
                        return false;
                    return true;
                },
            },
            after: {
                type: String,
                required: function () {
                    if (this.after === null)
                        return false;
                    return true;
                },
            },
            date: {
                type: Date,
                default: Date.now,
                required: true,
            },
        },
    ],
    seq: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Project', projectSchema);
