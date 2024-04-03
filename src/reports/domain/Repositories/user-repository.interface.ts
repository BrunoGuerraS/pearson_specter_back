import { CreateUserDTO } from "../DTO/createUser";

export interface IUserRepository {
    getUsers(): Promise<any>;
    getUserById(id: string): Promise<any>;
    createUser(user: CreateUserDTO): Promise<any>;
    updateUser(id: string, user: any): Promise<any>;
    deleteUser(id: string): Promise<any>;
}