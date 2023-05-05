"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../auth/login");
const chatRouter = (0, express_1.Router)();
chatRouter.get("/", (req, res) => {
    res.send("chat home!");
});
chatRouter.post("/room/:roomId", login_1.verifyTokenMiddleware, (req, res) => {
    const decoded = res.locals.decoded;
    res.send(decoded);
});
exports.default = chatRouter;
