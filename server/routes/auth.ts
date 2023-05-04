import { Router, Request, Response } from "express";

const authRouter = Router();

authRouter.get("/", (req: Request, res: Response) => {
    res.send("auth home!");
})

authRouter.get("/login", (req: Request, res: Response) => {
    res.send("login!");
})

export default authRouter;
