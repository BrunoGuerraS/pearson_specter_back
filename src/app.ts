import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import "reflect-metadata";
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from "./middleware/errorHandler";
import RESTRouterApi from "./routes";

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const createApp = async () => {
  const app = express();
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(express.json());
  RESTRouterApi(app);
  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  return app;
};

export default createApp;
