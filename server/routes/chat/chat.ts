import { Router, Request, Response } from "express";

const chatRouter = Router();

chatRouter.get("/", (req: Request, res: Response) => {
    res.send("chat home!");
})

chatRouter.get("/room/:roomId", (req: Request, res: Response) => {
    res.send(req.params.roomId);
})

export default chatRouter;