import { IContactData } from "./IContactData";
import { IEvidence } from "./IEvidence";
import { IPersonInvolved } from "./IPersonInvoved";
import { IPlace } from "./IPlace";
import { IReportStatus } from "./IReportStatus";
import { ITypeReport } from "./ITypesReport";

export interface IReport {
  id: string;
  id_client: number;
  date_start: Date;
  date_end: Date;
  description: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  observation: string | null | undefined;
  contact_data: IContactData;
  type_report: ITypeReport;
  person_involved: IPersonInvolved[];
  place: IPlace[];
  status: IReportStatus;
  evidence: IEvidence[];
  created_at: Date;
  updated_at: Date;
}

// export interface IForm {
//   date_start: Date;
//   date_end: Date;
//   description: string;
//   answer1: string;
//   answer2: string;
//   answer3: string;
//   answer4: string;
//   answer5: string;
//   answer6: string;
//   answer7: string;
//   person_involved: string;
//   place: string;

// }
