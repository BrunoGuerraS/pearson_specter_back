import { NextFunction, Request, Response } from "express";
import { Status } from "../db/entities/status.entity";
import { myDataSource } from "../lib/data-sourse";

const statusRepository = myDataSource.getRepository(Status);

export class StatusController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const status = await statusRepository.find();
      if (!status) throw new Error("status not found");
      res.status(200).json(status);
    } catch (error) {
      next(error);
    }
  }

  async findByOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const status = await statusRepository.findBy({ id: parseInt(id) });
      if (!status) throw new Error("status not found");
      res.status(200).json(status);
    } catch (error) {
      next(error);
    }
  }

  async getAllReportsById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const listOfRerportsById = await statusRepository
        .createQueryBuilder("status")
        .leftJoinAndSelect("status.report", "report")
        .where(`status.id = ${id}`)
        .getMany();
      if (!listOfRerportsById) throw new Error("status not found");
      res.status(200).json(listOfRerportsById);
    } catch (error) {
      next(error);
    }
  }
  async createStatus() {}
  async deleteStatus() {}
}
