import { IUserRepository } from "../Repositories/user-repository.interface";

export class UserDomainService {

  constructor(private readonly userRepository: IUserRepository) {
    
  }

  public async getUsers() {
    return await this.userRepository.getUsers();
  }
}

//medos dentro del servicio
//revisar que es un batutador
