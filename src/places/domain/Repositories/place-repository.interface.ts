import { CreatePlaceDTO } from "../DTO/createPlace";

export interface IPlaceRepository {
    getPlaces(): Promise<any>;
    getPlaceById(id: string): Promise<any>;
    createPlace(place: CreatePlaceDTO): Promise<any>;
    updatePlace(id: string, user: any): Promise<any>;
    deletePlace(id: string): Promise<any>;
}