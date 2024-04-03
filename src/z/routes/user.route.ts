import * as express from "express";
import { UsersController } from "../controllers/user.controller";
import { validateJwt } from "../middleware";

const { getUser } = new UsersController();
export const userRouter = express.Router();

userRouter.get("/", validateJwt, getUser);
