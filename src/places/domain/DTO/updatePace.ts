import { IPlace } from "../Interfaces/places.interface";

export type UpdatePlaceDTO = Partial<Omit<IPlace, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>>;