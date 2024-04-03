import * as boom from "@hapi/boom";
import * as bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { User } from "../db/entities/users.entity";
import { myDataSource } from "../lib/data-sourse";
import { generateRefreshToken, generateToken } from "../utilities/jwt.utils";

const userRepository = myDataSource.getRepository(User);

export class LoginController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const userFound = await userRepository.findOne({ where: { email }});

      if (!userFound) throw boom.notFound("user not found");

      const passwodValid = await bcrypt.compare(password, userFound.password);

      if (!passwodValid) throw boom.forbidden("invalid credentials");

      const payload = { id: userFound.id };

      console.log("payload into the login controller", payload, typeof payload)
      const token = generateToken(payload);

      const { refreshToken, expiresIn } = generateRefreshToken(payload);

      res.cookie("refreshToken", refreshToken, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
      });

      res.status(200).json({
        id: userFound.id,
        name: userFound.name,
        last_name: userFound.last_name,
        email: userFound.email,
        role: userFound.role,
        token,
      });
    } catch (error: any) {
      next(error);
    }
  }
}
