import { NextFunction, Router, Request, Response } from "express";

export default function ApiRoutes() {
    const router = Router();
    router.route("/test").get((req:Request, res:Response, next:NextFunction) => {
        try {
            return res.status(200).json({ message: "hello world" });
        } catch (err) {
            next(err);
        }
    });
    router.route("/new").get((req:Request, res:Response, next:NextFunction) => {
        try {
            return res.status(200).json({ message: "hello new" });
        } catch (err) {
            next(err);
        }
    });
    return router;
}
