import { IUser } from "../Interfaces/user.interface";

export type CreateUserDTO = Omit<IUser, "id" | "role">;
