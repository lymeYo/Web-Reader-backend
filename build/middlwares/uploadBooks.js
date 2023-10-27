"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const handleBookname_1 = __importDefault(require("../utils/handleBookname"));
const imagesPath = path_1.default.resolve(__dirname, '../upload/book');
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, imagesPath);
    },
    filename(req, file, cb) {
        cb(null, (0, handleBookname_1.default)(file.originalname));
    },
});
const uploadImages = (0, multer_1.default)({ storage });
exports.default = uploadImages;
