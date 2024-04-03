import { CreatePlaceDTO } from "../DTO/createPlace";
import { IPlaceRepository } from "../Repositories/place-repository.interface";

export class PlaceDomainService {
  constructor(private readonly placeRepository: IPlaceRepository) {}
  public async getPlaces() {
    return await this.placeRepository.getPlaces()
  }
  public async getPlaceById(id: string) {
    return await this.placeRepository.getPlaceById(id)
  }
  public async createPlace(place: CreatePlaceDTO) {
    return await this.placeRepository.createPlace(place)
  }
}
