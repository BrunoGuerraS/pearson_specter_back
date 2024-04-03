import { NextFunction, Request, Response } from "express";
import { verifyRefreshToken } from "../utilities/jwt.utils";
export interface RequestWithId extends Request {
  id?: string | object;
}

export const validateRefreshJWT = async (
  req: RequestWithId,
  res: Response,
  next: NextFunction
) => {
  const alert = "Unauthorized user";
  const refreshToken = req.cookies.refreshToken;
  console.log("refreshToken", refreshToken);
  if (!refreshToken) return res.status(401).json({ errors: [alert] });
  try {
    const payload: any = verifyRefreshToken(refreshToken);
    req.id = { id: payload.id };
    console.log("termine el proceso");
    next();
  } catch (error) {
    return res.status(401).json({ errors: [alert] });
  }
};
