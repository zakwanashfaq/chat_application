import { Router } from "express";
const authRouter = Router();
authRouter.get("/", (req, res) => {
    res.send("auth home!");
});
authRouter.get("/login", (req, res) => {
    res.send("login!");
});
export default authRouter;
