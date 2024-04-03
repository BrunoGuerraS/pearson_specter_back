import { IPlace } from "../Interfaces/places.interface";

export type CreatePlaceDTO = Omit<IPlace, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;