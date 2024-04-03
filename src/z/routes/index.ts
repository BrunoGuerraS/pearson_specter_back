import * as express from "express";
import { loginRouter } from "./login.route";
import { logoutRouter } from "./logout.route";
import { refreshRouter } from "./refresh.route";
import { registerRoute } from "./register.route";
import { reportRouter } from "./reports.route";
import { statusRouter } from "./status.route";
import { typeRouter } from "./typeReport.route";
import { userRouter } from "./user.route";

const RESTRouterApi = (app: express.Application) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/reports", reportRouter);
  router.use("/typeReports", typeRouter);
  router.use("/status", statusRouter);
  router.use("/register", registerRoute);
  router.use("/login", loginRouter);
  router.use("/logout", logoutRouter);
  router.use("/refresh", refreshRouter);
  router.use("/user", userRouter)
};

export default RESTRouterApi;
