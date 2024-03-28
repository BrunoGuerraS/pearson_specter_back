import { NextFunction, Request, Response } from "express";
import { ReportService } from "../service/report.service";

const { getAllReports, createReport, deleteRport, findReport } =
  new ReportService();

interface CustomRequest extends Request {
  pasrseData?: any;
}

export class ReportsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const allReports = await getAllReports();
      res.status(200).json(allReports);
    } catch (error) {
      next(error);
    }
  }

  async getReportByIdClient(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    console.log("soy el id",id);
    try {
      const report = await findReport(id);
      res.status(200).json(report);
    } catch (error) {
      next(error);
    }
  }

  async createReport(req: CustomRequest, res: Response, next: NextFunction) {
    const { pasrseData } = req;
    try {
      const report_id = await createReport(pasrseData);
      // sendEmail({ email: pasrseData.email, report_id });
      res.status(201).json({ report_id, message: "report created" });
    } catch (error) {
      next(error);
    }
  }

  async deleteRport(req: CustomRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await deleteRport(id);
      res.status(200).json({ message: "report deleted" });
    } catch (error) {
      next(error);
    }
  }
}
