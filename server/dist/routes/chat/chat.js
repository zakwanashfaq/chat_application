"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatRouter = (0, express_1.Router)();
chatRouter.get("/", (req, res) => {
    res.send("chat home!");
});
chatRouter.get("/room/:roomId", (req, res) => {
    res.send(req.params.roomId);
});
exports.default = chatRouter;
