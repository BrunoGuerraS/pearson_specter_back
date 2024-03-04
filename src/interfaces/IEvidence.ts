import { IReport } from "./IReport";

export interface IEvidence {
  id: string;
  file_name: string;
  path: string;
  report: IReport;
}
