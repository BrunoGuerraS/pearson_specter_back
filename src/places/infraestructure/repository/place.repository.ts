import { CreatePlaceDTO } from "../../domain/DTO/createPlace";
import { UpdatePlaceDTO } from "../../domain/DTO/updatePace";
import { IPlace } from "../../domain/Interfaces/places.interface";
import { IPlaceRepository } from "../../domain/Repositories/place-repository.interface";

export class PlaceRepository implements IPlaceRepository {
  constructor() {}
  getPlaces(): Promise<IPlace[]> {
    return Promise.resolve([]);
  }
  getPlaceById(id: string): Promise<any> {
    return Promise.resolve({});
  }
  createPlace(place: CreatePlaceDTO): Promise<any> {
    return Promise.resolve({});
  }
  updatePlace(id: string, user: UpdatePlaceDTO): Promise<any> {
    return Promise.resolve({});
  }
  deletePlace(id: string): Promise<any> {
    return Promise.resolve({});
  }
}


