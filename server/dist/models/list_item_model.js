"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Model, Schema } = mongoose_1.default;
const listItemSchema = new Schema({
    deadline: { type: Date, required: true },
    completed: { type: Boolean, required: true },
    priority: { type: Number, required: true },
});
var ListItem = mongoose_1.default.model('list', listItemSchema);
exports.default = ListItem;
