import { IReport } from "./IReport";

//pascal
export enum ReportStatus {
  Enviada = "ENVIADA",
  Recibida = "RECIBIDA",
  EnProceso = "EN PROCESO",
  Archivada = "ARCHIVADA",
  Resuelta = "RESUELTA",
}

export interface IReportStatus {
    id: number
    name: string
    report: IReport[];
}