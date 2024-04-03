import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IReportStatus } from "../../interfaces/IReportStatus";
import { Report } from "./report.entity";

@Entity("status")
export class Status implements IReportStatus{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  name: string;
  @OneToMany(() => Report, (report) => report.status)
  report: Report[];
}