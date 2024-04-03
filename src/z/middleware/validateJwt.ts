import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utilities/jwt.utils";

export interface RequestWithId extends Request {
  id?: string;
}

export const validateJwt = async (
  req: RequestWithId,
  res: Response,
  next: NextFunction
) => {
  const alert = "Unauthorized user";
  const jwt = req.headers.authorization?.split("Bearer ")[1];
  if (!jwt) {
    console.log("no jwt");
    return res.status(401).json({ errors: [alert] })
  };
  try {
    const payload: any = verifyToken(jwt);
    req.id = payload.id;
    console.log("Im doing wells");
    next();
  } catch (error: any) {
    console.error("error", error.message);
    res.status(401).json({ errors: error.message });
  }
};
