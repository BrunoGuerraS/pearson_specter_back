import * as dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3002,
  graphUrl: process.env.GRAPH_URL || "",
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbHost: process.env.DB_HOST || "",
  dbPort: process.env.DB_PORT || "",
  dbName: process.env.DB_NAME || "",
  secret: process.env.SECRET || "",
  secretWordJwt: process.env.JWT_PRIVATE_KEY || "",
  secretWordRefreshJwt: process.env.JWT_REFRESH_KEY || "",
  nodeMailPass: process.env.PASSWORD_APP_FOR_NODEMAILER
};

export default config;
