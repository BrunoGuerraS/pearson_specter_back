import * as boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import { Report } from "../db/entities/report.entity";
import { TypeReport } from "../db/entities/typeReport.entity";
import { myDataSource } from "../lib/data-sourse";

const typeReportRepository = myDataSource.getRepository(TypeReport);
const reportRepository = myDataSource.getRepository(Report);

export class TypeReportController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const typeReports = await typeReportRepository.find();
      if (!typeReports) throw boom.notFound("type not found");
      res.status(200).json(typeReports);
    } catch (error) {
      next(error);
    }
  }

  async findByOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const listOfReportsByType = await reportRepository
        .createQueryBuilder("r")
        .where("r.type_report = :id", { id: id })
        .getMany();
      if (!listOfReportsByType) {
        throw boom.notFound("type not found");
      }
      res.status(200).json(listOfReportsByType);
    } catch (error) {
      next(error);
    }
  }

  async createTypeReport() {}
  async deleteTypeReport() {}
}
