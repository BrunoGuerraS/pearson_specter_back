import { CreateUserDTO } from "../../domain/DTO/createUser";
import { UpdateUserDTO } from "../../domain/DTO/updateUser";
import { IUser } from "../../domain/Interfaces/user.interface";
import { IUserRepository } from "../../domain/Repositories/user-repository.interface";

export class UserRepository implements IUserRepository {
  constructor() {}
  getUsers(): Promise<IUser[]> {
    return Promise.resolve([]);
  }
  getUserById(id: string): Promise<any> {
    return Promise.resolve({});
  }
  createUser(user: CreateUserDTO): Promise<any> {
    return Promise.resolve({});
  }
  updateUser(id: string, user: UpdateUserDTO): Promise<any> {
    return Promise.resolve({});
  }
  deleteUser(id: string): Promise<any> {
    return Promise.resolve({});
  }
}

//contextos de rutas similar a roles para endpoints
