import { IUserRepository } from "../domain/Repositories/user-repository.interface";
import { UserDomainService } from "../domain/Services/user.service";

export class UserApplicationService {
    private userDomainService: UserDomainService;
    constructor( readonly userRepository: IUserRepository) {
        this.userDomainService = new UserDomainService(userRepository)
    }
    public async getUsers() {
        return await this.userDomainService.getUsers();
    }
    public async getUserById(id: string) {

    }
    public async createUser(user: any) {

    }
    public async updateUser(id: string, user: any) {

    }
    public async deleteUser(id: string) {

    }
}