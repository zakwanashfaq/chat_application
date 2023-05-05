import { Router, Request, Response } from "express";
import { verifyTokenMiddleware } from "../auth/login";

const chatRouter = Router();

chatRouter.get("/", (req: Request, res: Response) => {
    res.send("chat home!");
})

chatRouter.post("/room/:roomId", verifyTokenMiddleware, (req: Request, res: Response) => {
    const decoded: TUserTokenPayload = res.locals.decoded;
    res.send(decoded);
})

export default chatRouter;