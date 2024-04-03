import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./Interfaces/user.interface";

@Entity("users")
export class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passqord: string;

  @Column()
  role: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  deletedAt: string;
}
