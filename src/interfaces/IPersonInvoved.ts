import { IReport } from "./IReport";

export interface IPersonInvolved {
  id: string;
  name: string;
  last_name: string;
  role: string;
  company: string;
  report: IReport;
}

export type PInvolvedForm = Omit<IPersonInvolved, "id" | "report">;
