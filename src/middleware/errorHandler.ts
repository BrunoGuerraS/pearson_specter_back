import { NextFunction, Request, Response } from "express";

export const logErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("logErrors");
  console.log(err);
  next(err);
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("errorHandler");
  res.status(500).json({
    message: JSON.parse(err.message) ,
    stack: err.stack,
  });
};

export const boomErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.isBoom) {
    const { statusCode, payload } = err.output;
    res.status(statusCode).json(payload);
  } else {
    next(err);
  }
};
