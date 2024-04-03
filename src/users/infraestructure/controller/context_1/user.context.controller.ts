import { NextFunction, Request, Response } from "express";
import { UserApplicationService } from "../../../application/user.service";
import { UserRepository } from "../../repository/user.repository";

export class UserController {
    private userApplicationService: UserApplicationService;
    constructor(readonly userRepository: UserRepository){
        this.userApplicationService = new UserApplicationService(userRepository)
    }

    public async getUsers(req: Request, res: Response, next: NextFunction) {
        return await this.userRepository.getUsers();
    }
}