import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({unique: true})
    username: string
    @Column()
    name: string
    @Column()
    last_name: string
    @Column({unique: true})
    email: string
    @Column()
    password: string
    @Column()
    role: string
}