import * as express from "express";
import { ReportsController } from "../controllers/reports.controller";
import fileReader from "../middleware/fileReader";
import { organizeDataReport } from "../middleware/organizeDataReport";
import validatorHandler from "../middleware/validatosHandler";
import { createReportSchema, getReportSchema } from "../schema/report.schema";

const { getAll, getReportByIdClient, createReport, deleteRport } =
  new ReportsController();
export const reportRouter = express.Router();

reportRouter.get("/", getAll);

reportRouter.get("/:id", validatorHandler(getReportSchema, "params"), getReportByIdClient);

reportRouter.post(
  "/",
  fileReader,
  validatorHandler(createReportSchema, "body"),
  organizeDataReport,
  createReport
);

reportRouter.delete("/:id", deleteRport);
