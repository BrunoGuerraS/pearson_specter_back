import express, { Application, Request, Response } from "express";

const RESTRouterApi = (app: Application) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/reports", (req: Request, res: Response)=>{ res.send("reports") });
  router.use("/typeReports", (req: Request, res: Response)=>{ res.send("typeReports") });
  router.use("/status", (req: Request, res: Response)=>{ res.send("status") });
  router.use("/register", (req: Request, res: Response)=>{ res.send("register") });
  router.use("/login", (req: Request, res: Response)=>{ res.send("login") });
  router.use("/logout", (req: Request, res: Response)=>{ res.send("logout") });
  router.use("/refresh", (req: Request, res: Response)=>{ res.send("refresh") });
  router.use("/user", (req: Request, res: Response)=>{ res.send("user") })
};

export default RESTRouterApi;