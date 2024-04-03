import * as express from "express";
import { LoginController } from "../controllers/login.controller";
import validatorHandler from "../middleware/validatosHandler";
import { loginSchema } from "../schema/login.schema";
const { login } = new LoginController();
export const loginRouter = express.Router();

loginRouter.post("/", validatorHandler(loginSchema, "body"), login);
