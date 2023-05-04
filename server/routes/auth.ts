import { Router, Request, Response } from "express";

const authRouter = Router();

authRouter.get("/", (req: Request, res: Response) => {
    res.send("auth home!");
})

authRouter.get("/login", (req: Request, res: Response) => {
    res.send("login!");
})

authRouter.get("/signup", (req: Request, res: Response) => {
    res.send("signup!");
})

export default authRouter;
