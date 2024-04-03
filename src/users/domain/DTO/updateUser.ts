import { IUser } from "../Interfaces/user.interface";

export type UpdateUserDTO = Partial<Omit<IUser, "id">>;
