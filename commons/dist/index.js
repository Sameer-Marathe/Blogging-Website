"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePost = exports.createPost = exports.SigninInput = exports.SignUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignUpInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string()
});
exports.SigninInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string()
});
exports.createPost = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.UpdatePost = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
