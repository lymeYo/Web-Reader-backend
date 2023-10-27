"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadBooks_1 = __importDefault(require("../middlwares/uploadBooks"));
const handleBookname_1 = __importDefault(require("../utils/handleBookname"));
const router = (0, express_1.Router)();
router.post('/upload/book', uploadBooks_1.default.single('book'), (req, res) => {
    if (!req.file)
        return res.status(400).json({ msg: 'No uploaded file' });
    res.json((0, handleBookname_1.default)(req.files[0].fileName));
});
exports.default = router;
