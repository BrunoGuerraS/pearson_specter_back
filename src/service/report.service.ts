import { Report } from "../db/entities/report.entity";
import { myDataSource } from "../lib/data-sourse";

const reportRepository = myDataSource.getRepository(Report);

export class ReportService {
  async getAllReports() {
    const allReports = await reportRepository.find();
    return allReports;
  }

  async findReport(id: any) {
    const report = await reportRepository.findOne({ where: { id_client: id } });
    return report;
  }

  async createReport(data: any) {
    const { id_client } = await reportRepository.save(data);
    return id_client;
  }

  async deleteRport(id: any) {
    return await reportRepository.delete(id);
  }
}
