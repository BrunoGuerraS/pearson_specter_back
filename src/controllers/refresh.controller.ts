import { Request, Response } from "express";
import { generateToken } from "../utilities/jwt.utils";

export interface RequestWithId extends Request {
  id?: string;
}
export const RefreshController = (req: RequestWithId, res: Response) => {
  const payload = req.id;
  console.log("entre al RefreshController pyload=>", payload)
  try {
    const accessToken = generateToken(payload);
    res.status(200).json({ token: accessToken });
  } catch (error: any) {
    console.error("error", error.message);
    res.status(401).json({ errors: error.message });
  }
};
