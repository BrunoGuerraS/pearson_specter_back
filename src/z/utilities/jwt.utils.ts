import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const generateToken = (payload: any) => {
  console.log("soy payload y funcion= ", payload, typeof payload)
  const expiresIn = '10s';
  console.log("soy expiresIn y funcion= ", expiresIn)
  const accessToken = jwt.sign(payload, config.secretWordJwt, {
    algorithm: "HS256",
    expiresIn,
  });
  return accessToken;
};

export const verifyToken = (token: any) =>
  jwt.verify(token, config.secretWordJwt);

export const generateRefreshToken = (payload: any) => {
  const expiresIn = 24 * 60 * 60;
  const refreshToken = jwt.sign(payload, config.secretWordRefreshJwt, {
    algorithm: "HS256",
    expiresIn,
  });
  return { refreshToken, expiresIn };
};

export const verifyRefreshToken = (token: any) =>
  jwt.verify(token, config.secretWordRefreshJwt);
