import { NextFunction, Request, Response } from "express";
import { User } from "../db/entities/users.entity";
import { myDataSource } from "../lib/data-sourse";
// import { hashGenerator } from "../utilities/bcrypt.utils";

const userRepository = myDataSource.getRepository(User);

export class AuthController {
  async creteUser(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;
    try {
      // const newUser = { ...req.body, password: await hashGenerator(password)};
      // const result = await userRepository.save(newUser);
      // res.status(201).json({ result, message: "user created" });
      res.status(201).json({ message: "user created" });
    } catch (error) {
      next(error);
    }
  }
}