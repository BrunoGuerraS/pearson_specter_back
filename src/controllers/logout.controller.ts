import { NextFunction, Request, Response } from "express";

export class LogoutController {
  logout(req: Request, res: Response, next: NextFunction) {
    res.cookie("refreshToken", "", { httpOnly: true });
    res.status(200).json({ message: "Logout success" });
  }
}
