import { NextFunction, Request, Response } from "express";
import { PlaceApplicationService } from "../../../application/place.service";
import { PlaceRepository } from "../../repository/place.repository";


export class PlaceController {
    private placeApplicationService: PlaceApplicationService;
    constructor(readonly placeRepository: PlaceRepository){
        this.placeApplicationService = new PlaceApplicationService(placeRepository)
    }

    public async getUsers(req: Request, res: Response, next: NextFunction) {
        return await this.placeRepository.getPlaces();
    }
}