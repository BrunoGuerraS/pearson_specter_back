import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPersonInvolved } from "../../interfaces/IPersonInvoved";
import { IReport } from "../../interfaces/IReport";
import { Report } from "./report.entity";

@Entity("person_involved")
export class PersonInvolved implements IPersonInvolved {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({nullable: false})
  name: string;
  @Column()
  last_name: string;
  @Column()
  role: string;
  @Column()
  company: string;
  @ManyToOne(() => Report, (report) => report.person_involved, {onDelete: "CASCADE"})
  @JoinColumn({ name: "report_id" })
  report: IReport;
}
