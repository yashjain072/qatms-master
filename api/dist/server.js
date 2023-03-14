"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("./config/config"));
var user_1 = __importDefault(require("./routes/user"));
var project_1 = __importDefault(require("./routes/project"));
var ticket_1 = __importDefault(require("./routes/ticket"));
var organization_1 = __importDefault(require("./routes/organization"));
var demo_1 = __importDefault(require("./routes/demo"));
var db_1 = __importDefault(require("./config/db"));
var app = express_1.default();
var port = config_1.default.server.port;
//Middleware
app.use(cors_1({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],
}));
app.use(express_1.default.json());
//Connect to DB
db_1.default();
//Route Middleware
app.use('/api/users', user_1.default);
app.use('/api/projects', project_1.default);
app.use('/api/tickets', ticket_1.default);
app.use('/api/organizations', organization_1.default);
app.use('/api/demo', demo_1.default);
app.listen(port, function () {
    console.log("Server is running on port " + port);
});
