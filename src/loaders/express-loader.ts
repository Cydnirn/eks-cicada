import { Application, NextFunction, Response, Request } from "express";
import bodyParser from "body-parser";
import ApiRoutes from "../routes/api-routes";

export default function expressLoader(app: Application) {
    app.use(bodyParser.json({ strict: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api", ApiRoutes());
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(404).json({ message: "route not found" });
    });
    return app;
}
