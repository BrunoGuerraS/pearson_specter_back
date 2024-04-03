import { CreatePlaceDTO } from "../domain/DTO/createPlace";
import { IPlaceRepository } from "../domain/Repositories/place-repository.interface";
import { PlaceDomainService } from "../domain/Services/place.service";

export class PlaceApplicationService {
    private placeDomainService: PlaceDomainService;
    constructor(readonly placeRepository: IPlaceRepository){
        this.placeDomainService = new PlaceDomainService(placeRepository)
    }
    public async getPlaces() {
        return await this.placeDomainService.getPlaces()
    }
    public async getPlaceById(id: string) {
        return await this.placeDomainService.getPlaceById(id)
    }
    public async createPlace(place: CreatePlaceDTO) {
        return await this.placeDomainService.createPlace(place)
    }
}