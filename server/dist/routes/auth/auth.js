"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../../db/users/users");
const authRouter = (0, express_1.Router)();
authRouter.get("/", (req, res) => {
    res.send("auth home!");
});
authRouter.get("/login", (req, res) => {
    res.send("login!");
});
authRouter.get("/signup", (req, res) => {
    (0, users_1.addUser)({});
    res.send("signup!");
});
exports.default = authRouter;
