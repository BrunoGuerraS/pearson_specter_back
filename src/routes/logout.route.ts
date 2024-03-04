import * as express from "express";
import { LogoutController } from "../controllers/logout.controller";

const logoutController = new LogoutController();
export const logoutRouter = express.Router();

logoutRouter.get("/", logoutController.logout);
