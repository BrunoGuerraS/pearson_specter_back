import * as boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

const validatorHandler = (schema: any, property: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("body of :", req.body);
    const data = req[property as keyof Request];
    const { error } = schema.parse(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};

export default validatorHandler;
