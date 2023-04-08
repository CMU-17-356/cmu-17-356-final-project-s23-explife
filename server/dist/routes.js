"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use((0, cors_1.default)({ origin: ['http://localhost:8080', 'https://donuts-and-drones.fly.dev/'], methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).send('Our backend API for EXPLife :)');
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // TODO need to change the mongoose cluster url
        // await mongoose.connect("mongodb+srv://admin:somethingSecure@donut-backend.firu8qw.mongodb.net/?retryWrites=true&w=majority");
        // mongoose.set('strictQuery', true);
        app.listen(3000);
    }
    catch (error) {
        document.write(error);
        process.exit(1);
    }
});
start();
module.exports = app;
