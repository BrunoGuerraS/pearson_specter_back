import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import RESTRouterApi from "./app";
import ENV from "./common/config/envs";

class Server {
  app: Application;

  constructor() {
    this.app = express();
    this.app.use(cors({ credentials: true }));
    this.app.use(cookieParser());
    RESTRouterApi(this.app);
  }

  public start() {
    this.app.listen(ENV.config.port, ()=>{
        console.log(`app runing on port ${ENV.config.port}`)
    })
  }
}

const server = new Server();
server.start();

