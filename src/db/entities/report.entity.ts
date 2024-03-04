import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IReport } from "../../interfaces/IReport";
import { ContactData } from "./contactData.entity";
import { Evidence } from "./evidence.entity";
import { PersonInvolved } from "./personInvolved.entity";
import { Place } from "./place.entity";
import { Status } from "./status.entity";
import { TypeReport } from "./typeReport.entity";

@Entity("report")
export class Report implements IReport {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  id_client: number;

  @Column("date")
  date_start: Date;

  @Column("date")
  date_end: Date;

  @Column("text")
  description: string;

  @Column("text")
  answer1: string;

  @Column("text")
  answer2: string;

  @Column("text")
  answer3: string;

  @Column("text")
  answer4: string;

  @Column("text")
  answer5: string;

  @Column("text")
  answer6: string;

  @Column("text")
  answer7: string;

  @Column("text", { nullable: true })
  observation: string;

  @OneToOne(() => ContactData, (contactData) => contactData.report, {
    cascade: true,
  })
  @JoinColumn({ name: "contact_data" })
  contact_data: ContactData;

  @ManyToOne(() => TypeReport, (typeReport) => typeReport.id)
  @JoinColumn({ name: "type_report" })
  type_report: TypeReport;

  @OneToMany(() => PersonInvolved, (personInvolved) => personInvolved.report, {
    cascade: true,
  })
  @JoinColumn({ name: "report_id" })
  person_involved: PersonInvolved[];

  @OneToMany(() => Place, (place) => place.report, { cascade: true })
  @JoinColumn({ name: "places" })
  place: Place[];

  @ManyToOne(() => Status, (status) => status.report)
  @JoinColumn([{ name: "status_id", referencedColumnName: "id" }])
  status: Status;

  @OneToMany(() => Evidence, (evidence) => evidence.report, { cascade: true })
  @JoinColumn({ name: "evidence" })
  evidence: Evidence[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
