"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("./login");
const authRouter = (0, express_1.Router)();
authRouter.get("/", (req, res) => {
    res.send("auth home!");
});
authRouter.post("/login", login_1.login);
authRouter.get("/signup", (req, res) => {
    // validatePayloadFromBody(req.body);
    // addUser({});
    res.send("signup!");
});
exports.default = authRouter;
