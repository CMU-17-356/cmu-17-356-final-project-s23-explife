"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const list_item_model_1 = __importDefault(require("./list_item_model"));
const { Model, Schema } = mongoose_1.default;
const listSchema = new Schema({
    date: { type: Date, required: true },
    items: { type: [list_item_model_1.default], required: true },
    story: { type: String, required: false }
});
var List = mongoose_1.default.model('list', listSchema);
exports.default = List;
