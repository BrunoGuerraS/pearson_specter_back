import * as express from "express";
import { AuthController } from "../controllers/register.controller";
import validatorHandler from "../middleware/validatosHandler";
import { createUserSchema } from "../schema/user.schema";

export const registerRoute = express.Router();
const authController = new AuthController();

registerRoute.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  authController.creteUser
);
