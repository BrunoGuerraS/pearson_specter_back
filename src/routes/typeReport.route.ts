import * as express from "express";
import { TypeReportController } from "../controllers/typeReport.controller";
import { validateJwt } from "../middleware";

export const typeRouter = express.Router();
const { getAll, findByOne } = new TypeReportController();

typeRouter.get("/", validateJwt, getAll);
typeRouter.get("/:id", validateJwt, findByOne);
