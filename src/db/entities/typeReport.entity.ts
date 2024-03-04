import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IReport } from "../../interfaces/IReport";
import { ITypeReport } from "../../interfaces/ITypesReport";
import { Report } from "./report.entity";

@Entity("type_report")
export class TypeReport implements ITypeReport{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Report, (report) => report.id)
  report: IReport[];
}