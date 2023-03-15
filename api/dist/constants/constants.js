"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserProfilePic = exports.roleType = exports.IssueType = void 0;
var IssueType;
(function (IssueType) {
    IssueType["TASK"] = "task";
    IssueType["BUG"] = "bug";
    IssueType["STORY"] = "story";
    IssueType["Epic"] = "epic";
})(IssueType = exports.IssueType || (exports.IssueType = {}));
var roleType;
(function (roleType) {
    roleType["ADMIN"] = "Admin";
    roleType["PROJECTMANAGER"] = "Project Manager";
    roleType["MEMBER"] = "Member";
})(roleType = exports.roleType || (exports.roleType = {}));
exports.defaultUserProfilePic = 'https://i.ibb.co/NtkC9pG/default-profile.png';
