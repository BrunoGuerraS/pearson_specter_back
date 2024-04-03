import * as boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import { User } from "../db/entities/users.entity";
import { myDataSource } from "../lib/data-sourse";

const userRepository = myDataSource.getRepository(User);
export interface RequestWithId extends Request {
  id?: string;
}

export class UsersController {
  async getUser(req: RequestWithId, res: Response, next: NextFunction) {
    const { id } = req;
    try {
      const user = await userRepository.findOneBy({ id: id });
      if (!user) throw boom.unauthorized("user not found");
      const userInfo = {
        username: user.username,
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
      };
      res.status(200).json(userInfo);
    } catch (error) {
      throw boom.unauthorized("user not found");
    }
  }
}
