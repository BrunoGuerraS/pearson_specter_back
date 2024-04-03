import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IPlace } from "./Interfaces/places.interface";

@Entity("places")
export class Place implements IPlace {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  country: string;
  @Column()
  city: string;
  @Column()
  address: string;
  @Column()
  createdAt: string;
  @Column()
  updatedAt: string;
  @Column()
  deletedAt: string;
}
