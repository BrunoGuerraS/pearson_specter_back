import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPlace } from "../../interfaces/IPlace";
import { IReport } from "../../interfaces/IReport";
import { Report } from "./report.entity";

@Entity("place")
export class Place implements IPlace{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @ManyToOne(()=> Report, (report) => report.place, {onDelete: "CASCADE"})
    @JoinTable({name: "report_id"})
    @JoinTable({name: "places"})
    report: IReport;
}