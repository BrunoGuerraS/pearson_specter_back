import dotenv from "dotenv";

dotenv.config();

const ENV = {
  config: {
    space: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 3002,
    secretWordJwt: process.env.JWT_PRIVATE_KEY || "",
    secretWordRefreshJwt: process.env.JWT_REFRESH_KEY || "",
  },
  db: {
    username: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT || 3306,
    dbName: process.env.DB_NAME || "",
  },
  externalServices: {
    nodeMailter: {
      nodeMailPass: process.env.NODEMAILER_PASSWORD_APP,
    },
  },
};

export default ENV;
