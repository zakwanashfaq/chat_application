import { Router, Request, Response } from "express";
import { addUser } from "../../db/users/users";
import { login } from "./login";

const authRouter = Router();

authRouter.get("/", (req: Request, res: Response) => {
    res.send("auth home!");
})

authRouter.post("/login", login)

authRouter.get("/signup", (req: Request, res: Response) => {
    // validatePayloadFromBody(req.body);
    // addUser({});
    res.send("signup!");
})

export default authRouter;
