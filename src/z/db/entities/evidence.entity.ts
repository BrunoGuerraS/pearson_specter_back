import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Report } from "./report.entity";

@Entity("evidence")
export class Evidence {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("text")
  file_name: string;
  @Column("text")
  path: string;
  @ManyToOne(() => Report, (report) => report.evidence, {onDelete: "CASCADE"})
  report: Report;
}
