import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IEvidence } from "./Interfaces/evidence.interface";

@Entity("evidences")
export class Evidence implements IEvidence {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    filename: string;

    @Column()
    path: string;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;

    @Column()
    deletedAt: string;
}