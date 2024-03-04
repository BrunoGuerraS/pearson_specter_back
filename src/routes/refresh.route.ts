import * as express from "express";
import { RefreshController } from "../controllers/refresh.controller";
import { validateRefreshJWT } from "../middleware/validateRefreshToken";

export const refreshRouter = express.Router();

refreshRouter.get("/", validateRefreshJWT, RefreshController);
