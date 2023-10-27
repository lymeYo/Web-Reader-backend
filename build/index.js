"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const upload_route_1 = __importDefault(require("./routes/upload.route"));
const app = (0, express_1.default)();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(PORT, ' listen...');
});
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/', express_1.default.static(path_1.default.join(__dirname, 'upload/book')));
app.use(upload_route_1.default);
