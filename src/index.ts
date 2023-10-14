import express, { Application } from "express";

import http from "http";
import expressLoader from "./loaders/express-loader";

const app = express();

function startServer() {
    (async (app: Application) => {
        app = expressLoader(app);
        const server = http.createServer(app);
        server.listen(3000);
        console.log("Server running on port 3000");
    })(app);
}

startServer();
