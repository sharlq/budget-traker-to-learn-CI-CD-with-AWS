"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/', (req, res) => {
    res.send('Hello World');
});
console.log(process.env.SERVER_PORT);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
app.listen;
