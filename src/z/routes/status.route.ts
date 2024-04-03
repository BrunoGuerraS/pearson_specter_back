import * as express from "express";
import { StatusController } from "../controllers/status.controller";

const { getAll, getAllReportsById } = new StatusController();
export const statusRouter = express.Router();

statusRouter.get("/", getAll);
statusRouter.get("/:id", getAllReportsById);
