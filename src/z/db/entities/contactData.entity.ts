import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IContactData } from "../../interfaces/IContactData";
import { Report } from "./report.entity";

@Entity("contact_data")
export class ContactData implements IContactData{
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @OneToOne(() => Report, (report) => report.contact_data)
  report: Report;
}
